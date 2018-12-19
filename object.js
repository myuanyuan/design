var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal2 = /** @class */ (function () {
    function Animal2(name) {
        this.name = name;
    }
    Animal2.prototype.eat = function (food) {
        console.log(this.name, 'eat', food);
    };
    return Animal2;
}());
var _Cat = /** @class */ (function (_super) {
    __extends(_Cat, _super);
    function _Cat() {
        return _super.call(this, '猫') || this;
    }
    _Cat.prototype.speak = function (word) {
        console.log(this.name, 'speak', word);
    };
    return _Cat;
}(Animal2));
var _Dog = /** @class */ (function (_super) {
    __extends(_Dog, _super);
    function _Dog() {
        return _super.call(this, '狗') || this;
    }
    _Dog.prototype.speak = function (word) {
        console.log(this.name, 'speak', word);
    };
    return _Dog;
}(Animal2));
var _cat = new _Cat();
var _dog = new _Dog();
_cat.speak('喵喵喵');
_dog.speak('汪汪汪');
