const person = {
    name: 'Rebeca',
    age: 2,
    weigth: 13
}

console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))

Object.entries(person).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

// using destructuring
Object.entries(person).forEach(([key, value]) => {
    console.log(`${key}: ${value}`)
})

//can also dynamically define some characteristics
//example: property may or may not be changed or visible using .keys
Object.defineProperty(person, 'birthDate', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})
person.birthDate = '01/01/2017'
console.log(person.birthDate)
console.log(Object.keys(person))

//new Object.assign function (ECMAScript 2015 / as 6)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) // concatenation of several obj

console.log(obj)

Object.freeze(obj)
obj.c = 1234
console.log(obj)

// Object.setPrototypeOf(ferrari, carro) // Inheritance