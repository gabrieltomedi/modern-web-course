// Functions are first-class citizens(Objects) in JavaScript.
// Higher-Order function

function fun1() { }

// Store in a variable
const fun2 = function () { }// anonymous function

// Store inside an array
const array = [function (a, b) { return a + b }, fun1, fun2]

console.log(array[0](2, 3))

// Store inside an object attribute
const obj = {}
obj.speak = function () { return 'Hi' }

console.log(obj.speak())

// Pass function as parameter to another function
function run(fun) {
    fun()
}

run(function () { console.log('Running...') })

// A function can return/contain a function
function sum1(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

sum1(2, 3)(4)
const result = sum1(2, 3)
result(5)