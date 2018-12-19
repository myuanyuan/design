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
function _say(user) {
    console.log(user);
}
say(10);
/**
 * public
 * protected
 * private
 */
var Person1 = /** @class */ (function () {
    function Person1(name, age, money) {
        this.name = name;
        this.age = age;
        this.money = money;
    }
    Person1.prototype.getMoney = function () {
        console.log(this.money);
    };
    return Person1;
}());
var Student1 = /** @class */ (function (_super) {
    __extends(Student1, _super);
    function Student1(name, age, money, num) {
        var _this = _super.call(this, name, age, money) || this;
        _this.num = num;
        return _this;
    }
    Student1.prototype.getName = function () {
        console.log(this.name);
    };
    Student1.prototype.getAge = function () {
        console.log(this.age);
    };
    return Student1;
}(Person));
var s2 = new Student1('mmm', 12, 1222222, 123);
console.log(s2.name);
