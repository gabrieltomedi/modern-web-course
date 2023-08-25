const a = { name: 'test' } 
console.log(a) 

// Attribution by reference
const b = a
console.log(b)

b.name = 'opa'
console.log(a)
console.log(b)

//a = 3 erro
let c = 3

let d = c
d++

console.log(c)
console.log(d) // primitive types copy by value different from obj
