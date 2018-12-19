/* 代理模式
* 由于对象不能直接引用另一个对象，所以需要通过代理对象在这两个对象之间起到中介作用
* 可以在使用者和目标对象之间加一个代理对象，通过代理可以实现控制
*/

class Google {
    get(url) {
        return 'google';
    }
}

class Proxy {
    constructor() {
        this.google = new Google();
    }
    get(url) {
        return this.google.get(url)
    }
}

let proxy = new Proxy()

let result = proxy.get('http://www.google.com');

console.log(result);