/*
*装饰器模式
*不改变其原有的结构和功能，为对象添加新功能
*装饰器比继承更加灵活
*/


class Coffee {
    make(water) {
        return `${water}+咖啡`;
    }
    cost() {
        return 10;
    }
}

class MilkCoffee {
    constructor(parent) {
        this.parent = parent;
    }
    make(water) {
        return `${this.parent.make(water)}+奶`;
    }
    cost() {
        return this.parent.cost() + 2;
    }
}
class SugarCoffee {
    constructor(parent) {
        this.parent = parent;
    }
    make(water) {
        return `${this.parent.make(water)}+糖`
    }
    cost() {
        return this.parent.cost() + 3;
    }
}

let coffee = new Coffee();
let milkCoffee = new MilkCoffee(coffee);
let sugarCoffee = new SugarCoffee(milkCoffee);

console.log(milkCoffee.cost())
console.log(sugarCoffee.cost())