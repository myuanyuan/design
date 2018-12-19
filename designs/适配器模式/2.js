// 实例 ajax
// 适配 中间处理成合适的
function ajax(options) {
    let defaultOptions = {
        method: 'GET',
        dataType: 'json',
    }
    for (let attr in options) {
        defaultOptions[attr] = options[attr] || defaultOptions[attr];
    }
    console.log(defaultOptions);
}
// 适配 中间处理成合适的
function transform(str) {
    return JSON.parse(str)
}

ajax({
    url: 'http://baidu.com',
    method: 'POST',
    success(str) {
        let result = transform(str);
        console.log(result)
        return result;
    }
})