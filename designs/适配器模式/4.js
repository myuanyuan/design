// 实例 JQ
// JQ ajax换fetch

// let $ = require('jquery');
window.$ = {
    ajax(options) {
        return fetch(options.url, {
            method: options.method || 'GET',
            body: JSON.stringify(options.data) || {}
        }).then(response => response.json());
    }
}

$.ajax({
    url,
    typy: 'POST',
    dataType: 'json',
    data: { id: 1 },
}).then((data) => {
    console.log(data);
})