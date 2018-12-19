/*
*装饰器模式
*不改变其原有的结构和功能，为对象添加新功能
*装饰器比继承更加灵活
*/

class Duck {
    constructor(name) {
        this.name = name;
    }
    eat(food) {
        console.log(this.name, '吃', food);
    }
}

class tangDuck {
    constructor(name) {
        this.duck = new Duck(name)
    }
    eat(food) {
        this.duck.eat(food)
        console.log('xieixe');
    }
}

let tang = new tangDuck('tang');
let duck = new Duck('tang');

tang.eat('苹果');
duck.eat('苹果');