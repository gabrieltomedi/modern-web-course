// function with no return
function printSum(a, b) {
    console.log(a + b)
}

printSum(2,3)
printSum(2)
printSum(2,5,4,5,7,8)
printSum()


// function with return

function sum1(a, b = 1) {
    return a + b
}

console.log(sum1(2,8))
console.log(sum1(2))
console.log(sum1())

