const grades = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in grades) {
    console.log(i, grades[i])
}

const pessoa = {
    name: 'Ana',
    surname: 'Silva',
    age: 29,
    weight: 64
}

for (let attributes in pessoa) {
    console.log(`${attributes} = ${pessoa[attributes]}`)
}

