// operator ... (spread / rest)
// using rest as a parameter of a function
function total(...numbers) {
    let total = 0
    numbers.forEach(n => total += n)
    return total
}

console.log(total(2, 3, 4, 5))

// use spread with object
const employee = { name: 'David', wage: 13223.99}
const clone = { active: true, ...employee } 
console.log(clone)

// use spread with array
const groupA = ['Ana', 'David', 'Felix']
const groupComplete = ['Mona', ...groupA, 'Marcos']
console.log(groupComplete)
