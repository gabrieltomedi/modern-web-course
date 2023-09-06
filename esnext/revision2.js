// Arrow Function
const sum = (a, b) => a + b
console.log(sum(2, 3))

// Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2=  lexico1.bind({})

lexico1()
lexico2()

// Parameters Default
function log(text = 'Node') {
    console.log(text)
}

log()
log('test1!')

// Operator rest
function total(...numbers) {
    let total = 0
    numbers.forEach(n => total += n)
    return total
}

console.log(total(2, 3, 4, 5))