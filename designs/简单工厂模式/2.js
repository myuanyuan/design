/**
 * 工厂模式
*/

// 简单工厂模式  实例jquery
class Jquery {
    constructor(select){
        this.select = select;
        let elements = document.querySelectorAll(select);
        this.length = elements.length;
        for (let i = 0; i < this.length; i++){
            this[i] = elements[i]
        }
    }
}

window.$=(select)=>{
    return new Jquery(select);
}

// 简单工厂模式  实例react

let h1 = <h1 className='title'>hello</h1>;
let h1 = React.createElement('h1', { className: 'title'}, 'hello');

// 实现
class VNode{
    constructor(tag, attrs, children) {
        this.tag = tag;
        this.attrs = attrs;
        this.children = children;
    }
}

function createElement(tag, attrs, children){
    return new VNode(tag, attrs, children)
}