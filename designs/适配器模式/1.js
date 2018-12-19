// 适配器模式

class Power {
    charge() {
        return `220v`;
    }
}

class Adaptor {
    constructor() {
        this.power = new Power();
    }
    charge() {
        let v = this.power.charge();
        return `${v}=>12v`
    }
}

class Client {
    constructor() {
        this.adaptor = new Adaptor()
    }
    use() {
        console.log(this.adaptor.charge())
    }
}

let c1 = new Client()
c1.use()