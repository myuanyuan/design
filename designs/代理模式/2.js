/* 反向代理
* 负载均衡
* 保护内部信息
*/

// 代理缓存

let sum = (function (n) {
    let cache = {};
    function multi(n) {
        if (n <= 1) return 1;
        return n * cache[n - 1] || multi(n - 1);
    }
    return function () {
        let result = 0;
        for (let i = 1; i <= n; i++) {
            let res = multi(i);
            cache[i] = res;
            result += res;
        }
        return result;
    }
})()


console.time('cost')
console.log(sum(10000))
console.timeEnd('cost')