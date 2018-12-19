class Animal2 {
    public name : string;
    constructor(name) {
        this.name = name;
    }
    eat(food) {
        console.log(this.name, 'eat', food)
    }
}

class _Cat extends Animal2{
    constructor(){
        super('猫')
    }
    speak(word) {
        console.log(this.name, 'speak', word)
    }
}
class _Dog extends Animal2 {
    constructor() {
        super('狗')
    }
    speak(word){
        console.log(this.name,'speak'c, word)
    }
}

let _cat = new _Cat();
let _dog = new _Dog();

_cat.speak('喵喵喵')
_dog.speak('汪汪汪')