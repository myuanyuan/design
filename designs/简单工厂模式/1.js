/**
 * 工厂模式
*/

// 简单工厂模式

class Plant {
    constructor(name){
        this.name = name;
    }
    grow(){
        console.log(`我是${name},我在生长`)
    }
}
class Apple extends Plant{
    constructor(name, flaver){
        super(name)
        this.flaver = flaver;
    }
}
class Orange extends Plant {
    constructor(name, flaver) {
        super(name)
        this.flaver = flaver;
    }
}
// 直接new缺点 耦合 依赖具体实现 项目中使用后不能修改
let p1 = new Apple();
let p2 = new Orange();

class Factory {
    static creact(type){
        switch (type) {
            case 'apple':
            return new Apple('苹果', '甜');
            case 'orange':
                return new Orange('橘子','酸');
            default: 
            throw new Error('没有') 
        }
    }
}

let p3 = Factory.creact('apple');
console.log(p3)