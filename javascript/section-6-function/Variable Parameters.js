function sum1() {
    let sum1 = 0
    for (i in arguments) {
        sum1 += arguments[i]
    }
    return sum1
}

console.log(sum1())
console.log(sum1(1))
console.log(sum1(1.1, 2.2, 3.3))
console.log(sum1(1.1, 2.2, 'Test'))
console.log(sum1('a', 'b', 'c'))
