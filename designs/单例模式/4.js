// 变量名冲突
// 复杂层次对象的可读性要求 实例 jquery

// $.get()
// $.post()

let $={};

$.define = function(namespace, fn){
    let namespaces = namespace.split('.');
    let fnName = namespaces.pop();
    let current =$;
    for (let i = 0; i < namespaces.length;i++){
        let namespace = namespaces[i];
        if (!current[namespace]){
            current[namespace]={};
        }
        current = current[namespace];
    }
    current[fnName]=fn;
}
$.define('dom.addClass', function(){
    console.log('dom.addClass')
})
$.define('dom.attr', function () {
    console.log('dom.attr')
})

$.dom.addClass()
$.dom.attr()