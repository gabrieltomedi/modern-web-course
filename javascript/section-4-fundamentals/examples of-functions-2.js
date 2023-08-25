// Storing a function in a variable

const printSum = function /*anonymous function*/(a,b) {
    console.log(a + b)
} 

printSum(2, 3)

// Store an arrow function in a variable

const sum1 = (a, b) => {
    return a + b
}
console.log(sum1(2, 4))

// implicit return 

const subtraction = (a, b) => a - b 
console.log(subtraction(2, 3))


const print1 = a => console.log(a)
print1('Cool')