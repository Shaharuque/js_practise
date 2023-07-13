class Animal{
    constructor(name){
        this.name=name
    }
    shout(n){
        console.log(`${this.name} is shouting loudly ${n} times today`)
    }
}

class Monkey extends Animal{

    //constructor jodi nao banano hoy tao js engine will make a default constructor
    constructor(name,color){
        super(name)
        this.color=color
    }
    eat(){
        console.log(`${this.name} want to eat ${this.color} banana`)
    }

    //Method override=>same number of parameters
    shout(n){
        super.shout(898)
        console.log(`${n}after calling the parent shout method I will be the next method to be executed`)
    }
    // JS doesn't support overloading
    // shout(n,m,k){
    //     super.shout(n)
    //     console.log(`${n} ${m} ${k} three parameters`)
    // }
}

let animal=new Animal('bruno')
//animal.shout()
//But Parent cann't access the child class methods
// animal.eat()

//As Monkey is inherited Animal so parent class all insitance and method can be accessed by child Monkey
let monkey1=new Monkey('chipo','orange')
monkey1.eat()
monkey1.shout(6)