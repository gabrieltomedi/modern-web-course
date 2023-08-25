/* Can make a factory function to do the same as below
const prod1 = {
    name:  '....',
    price: 45
}
const prod2 = {
    name:  '....2',
    price: 1234
}
*/

// Factory
function creatPerson() {
    return {
        name: 'Ana',
        surname: 'Silva'
    }
}

console.log(creatPerson())