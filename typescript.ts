function _say (user:number){
    console.log(user);
}
say(10)

/**
 * public
 * protected
 * private
 */

 class Person1 {
     public name: string;   
     protected age: number;
     private money: number;
     constructor(name, age, money){
         this.name=name;
         this.age=age;
         this.money=money;
     }
     getMoney() {
         console.log(this.money);
     }
 }

class Student1 extends Person{
     public num: number;
     constructor(name, age, money, num){
         super(name, age, money)
         this.num = num;
     }
     getName(){
         console.log(this.name);
     }
    getAge() {
        console.log(this.age);
    }
    
 }

 let s2 = new Student1('mmm', 12, 1222222, 123);
 console.log(s2.name);

