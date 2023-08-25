// Object.preventExtensions
const product = Object.preventExtensions({
    name: 'Any', price: 1.99, tag: 'promotion'
})
console.log('ExteExtensiblensível:', Object.isExtensible(product))

product.name = 'TV'
product.description =  'TV LED 40'
delete product.tag
console.log(product)

// Object.seal

const person = { name: 'Juliana', age: 35}
Object.seal(person)
console.log('Selado:', Object.isSealed(person))

person.surname = 'Silva'
delete person.name
person.age = 29
console.log(person)

//  Object.freeze = sealed + constant values

