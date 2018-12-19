// 单例模式 确保一个类仅有一个实例，并提供一个访问它的全局访问点
class Window{
    constructor(name){
        this.name=name;
    }
    static getInstance(){   //static 为类上色方法，不能通过实例来访问
        if(!this.instance){
            this.instance = new Window();
        }
        return this.instance;
    }
}

let s1 = Window.getInstance();
let s2 = Window.getInstance();
console.log(s1);
console.log(s2);
console.log(s1===s2);