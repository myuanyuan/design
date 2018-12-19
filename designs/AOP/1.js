// OPA Aspect Oriented Programming 面向切面编程
// 可以通过预编译方式和运行期动态代理实现：在不修改源代码的情况下给程序动态统一添加功能的技术
// AOP 指在函数执行之前或之后添加一些额外的逻辑，而不需要修改函数的功能

Function.prototype.before = function (beforeFn) {
    let _this = this;
    return function () {
        beforeFn.apply(this, arguments);
        _this.apply(this, arguments);
    }
}
Function.prototype.after = function (afterFn) {
    let _this = this;
    return function () {
        _this.apply(this, arguments);
        afterFn.apply(this, arguments);
    }
}

function buy(money, goods) {
    console.log(`花${money}元买${goods}`);
}

buy = buy.before(function () {
    console.log('要钱')
})

buy = buy.after(function () {
    console.log('还钱')
})

buy(0.8, '盐')



