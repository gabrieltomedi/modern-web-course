// let and const
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)

// Templete String
const product = 'iPad'
console.log(`${product} is expensive`)

// Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const { age: i, name1 } = { name1: 'ana', age: 19}
console.log(i, name1)