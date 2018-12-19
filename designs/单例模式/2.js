//  透明单例 违反了单一职责原则
let Window = (function (){
    let window;
    let Window = function (name){
        if(window){
            return window;
        }else{
            this.name = name;
            return (window=this)
        }
    }
    return Window;
})();

let w1 = new Window().this;
let w2 = new Window().this;

