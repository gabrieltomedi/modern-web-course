const pilots = ['Vettel', 'Alonso', 'Raikkonen','Massa']
pilots.pop() // remove the last element
console.log(pilots)

pilots.push('Verstappen') // add at the end of the array
console.log(pilots)

pilots.shift() // remove the first
console.log(pilots)

pilots.unshift('Hamilton') // Add at the beginning of the array
console.log(pilots)

// Splice can add and remove elements

// add
pilots.splice(2, 0, 'Bottas', 'Massa')
console.log(pilots)

// remove
pilots.splice(3, 1)
console.log(pilots)

const pilot1 = pilots.slice(2) // returns a new array
console.log(pilot1)

const algunspilots2 = pilots.slice(1, 4) 
console.log(algunspilots2)
