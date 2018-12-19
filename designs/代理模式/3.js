// es6 Proxy

let wangyan = {
    name: 'wangyan',
    age: 30,
    height: 165,
};
let wangmama = new Proxy(wangyan, {
    get(target, key) {
        if (key === 'age') {
            return target.age - 2;
        } else if (key === 'height') {
            return target.height + 3;
        } else {
            return target[key];
        }
    },
    set(target, key, value) {
        if (key === 'bf') {
            let bf = value;
            if (bf.age > 40) {
                throw new Error('too old')
            } else if (bf.height < 175) {
                throw new Error('too low')
            } else {
                target.bf = bf;
            }
        }
    }
});

console.log(wangmama.age)
console.log(wangmama.bf = {
    age: 50
})