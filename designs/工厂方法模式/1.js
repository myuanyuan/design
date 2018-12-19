/**
 * 工厂模式
*/

// 工厂方法模式 给每个产品分配一个单独的工厂

class Plant{
    constructor(name){
        this.name = name;
    }
}

class Apple extends Plant{
    constructor(name, flaver){
        super(name)
        this.flaver = name;
    }
}
class Orange extends Plant {
    constructor(name, flaver) {
        super(name)
        this.flaver = flaver;
    }
}

class Interface {
    create() {}
}

class AppleFactory extends Interface{
    static create(){
        return new Apple('苹果', '甜');
    }
}
class OrangeFactory extends Interface{
    static create() {
        return new Orange('橘子', '酸');
    }
}
// let apple = AppleFactory.create();
// let orange = OrangeFactory.create();

// 与配置对象配合  // 或者配合文件
let settings = {
    'apple': AppleFactory,
    'orange': OrangeFactory,
}
let apple = settings['apple'].create()
let orange = settings['orange'].create()

console.log(apple, orange)