// 单例模式 确保一个类仅有一个实例，并提供一个访问它的全局访问点
// 把类的实例创建和单例逻辑分开

function Window (name){
    this.name = name;
}

function Dialog(title, content){
    this.title=title;
    this.content = content;
}

Window.prototype.getName=()=>{
    console.log(this.name);
}

let CreactSingle = function (Counstructor){
    let instance;
    return function (){
        if (!instance) {
            instance = new Counstructor(...arguments);
        }
        return instance;
    }
}

let createWindow = CreactSingle(Window);
let w1 = new createWindow('w1')
let w2 = new createWindow('w2')
console.log(w1===w2);






