const students = [
    { name: 'João', grade: 7.3, scholar: false},
    { name: 'Maria', grade: 9.2, scholar: true},
    { name: 'Pedro', grade: 9.6, scholar: false},
    { name: 'Ana', grade: 8.7, scholar: true}
]

console.log(students.map(a => a.grade))
const resultado =  students.map(a => a.grade).reduce(function(accumulator, current) {
    console.log(accumulator, current)
    return accumulator + current
})

console.log(resultado)


console.log('\n example with set initial value \n')

const resultado2 =  students.map(a => a.grade).reduce(function(accumulator, current) {
    console.log(accumulator, current)
    return accumulator + current
}, 10)

console.log(resultado2)