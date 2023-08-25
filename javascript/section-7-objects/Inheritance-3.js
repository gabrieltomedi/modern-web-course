const father = { name: 'Pedro', hairColor: 'black' }

const daughter1 = Object.create(father)
daughter1.name = 'Ana'
console.log(daughter1.hairColor)

const daughter2 = Object.create(father, {
    name: { value: 'Bia', writable: false, enumerable: true }
})

console.log(daughter2.name)
daughter2.name = 'Carla'
console.log(`${daughter2.name} has ${daughter2.hairColor} hair`)

console.log(Object.keys(daughter1))
console.log(Object.keys(daughter2)) 

for(let key in daughter2) {
    daughter2.hasOwnProperty(key) ?
        console.log(key) : console.log(`by inheritance: ${key}`)
}
