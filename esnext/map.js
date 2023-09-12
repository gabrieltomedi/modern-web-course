const technologies = new Map()
technologies.set('react', { framework: false})
technologies.set('angular', { framework: true})

console.log(technologies.get('react').framework)

const variableKeys = new Map([
    [function () {}, 'Function' ],
    [{}, 'Object'],
    [123, 'Number']
])

variableKeys.forEach((vl, ch) => {
    console.log(ch, vl)
}) 

console.log(variableKeys.has(123))
variableKeys.delete(113)
console.log(variableKeys.delete(123))
console.log(variableKeys.size)

variableKeys.set(123, 'A')
variableKeys.set(123, 'B')
variableKeys.set(432, 'B')
console.log(variableKeys)