// 串行连续读取三个文件的内容
let fs = require('fs');
function promisify(readFile) {
    return function (...args) {
        return new Promise((res, rej) => {
            fs.readFile(...args, function (err, data) {
                if (err) {
                    rej(err)
                } else {
                    res(data)
                }
            })
        })
    }
}

(async function get() {
    let readFile = promisify(fs.readFile);
    let f1 = await readFile('1.js', 'utf8');
    let f2 = await readFile('2.js', 'utf8');
})()