/**
 * 单例模式的应用场景
 * 数据库的链接池
 * 缓存 提高性能
*/

let express = require('express');
let bodyParser = require('body-parser');
let fs= require('fs');
let app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('/user/:id', function(req, res){
    let id = req.params.id;
    fs.readFile(`./users/${id}.json`, 'utf8', function (err, data) {
        console.log(data)
        console.log(err)
        let user = JSON.parse(data)
        res.json(user)
    })
})
app.post('/user', function(req, res){
    let user = req.body;
    fs.writeFile(`./ussers/${user.id}.json`, JSON.stringify(user), function(err){
        res.json(user)
    })
})
app.listen(8084);