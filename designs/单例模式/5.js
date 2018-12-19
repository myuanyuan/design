// 模态框
class Login{
    constructor(){
        this.element = document.createElement('div');
        document.body.appendChild(this.element);
    }
    static getInstance(){
        if (!this.instance){
            this.instance = new Login();
        }
        return this.instance;
    }
}