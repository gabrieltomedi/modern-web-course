// ES8: Object.values / Object.entries
const obj = { a: 1, b: 2, c:3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

// improvements in the literal notation
const name1 = 'Carla'

const person = {
              // Befor ES8:
    name1,    // name1: name1,
    hello(){  // hello: function
        return 'Hello guys!'
    }
}

console.log(person.name1, person.hello())

// Class
class Animal {}
class Dog extends Animal {
    bark() {
        return 'Bau Bau!'
    }
}

console.log(new Dog().bark())