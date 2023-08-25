let value 
console.log(value)// unassigned value appears undefined
//console.log(value2)// would appear as undefined (not created)

value = null;

console.log(value)

// console.log(value.toString()) // TypeError: Cannot read property 'toString' of null

const product = {} 
console.log(product.price)// undefined
console.log(product)
// console.log(product.price.a)  error

product.price = 3.50 

console.log(product)

product.price = undefined // avoid assigning undefined (leave it to language to define)

console.log(!!product.price)
console.log(product.price)
// delete product.price // correct way to remove an attribute

product.price = null 
console.log(!!product.price)
console.log(product)


