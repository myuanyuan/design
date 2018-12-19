// 子类可以覆盖父类
class Person {
    constructor(gender, name){
        super()
        this.gender = gender;
        this.name = name;
    }
    buy() {
        console.log('买东西')
    }
}

class Men extends Person{
    constructor(gender, name){
        super()
        this.gender=gender;
        this.name = name;
    }
    buy() {
        console.log('买ipad')
    }
}
class Womem extends Person {
    constructor(gender, name) {
        super()
        this.gender = gender;
        this.name = name;
    }
    buy(){
        console.log('买包')
    }
}

let p1 = new Person('人');
let p2 = new Men('男人');
let p3 = new Womem('女人');
p1.buy()
p2.buy()
p3.buy()

let jiang = {
    merry(person){
        console.log(`jiang和${person.name}结婚`)
    }
}

jiang.merry(new Womem('女', '范冰冰'))