/* class Person {
    constructor(name) {
        this.name = name
    }

    speak() {
        console.log(`My name is ${this.name}`)
    }
} 

const p1 = new Person('João')
p1.speak()*/

// same thing as the class above except it's a constructor function
function Person2(name) {
    this.name = name

    this.speak = function () {
        console.log(`My name is ${this.name}`)
    }
}

const p2 = new Person2('João')
p2.speak()

// Factory Function
const createPerson = name =>{
    return {
        speak: () => console.log(`My name is ${name}`)
    }
}

const p3 =  createPerson('Paulo')
p3.speak()  