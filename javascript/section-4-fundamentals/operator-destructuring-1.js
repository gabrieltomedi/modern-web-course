// ES2015 new feature

const person = {
    name1: 'ana',
    age: 25,
    adsress: {
        street: 'Rua ABC',
        number: 145
    }
}

const { name1, age } = person
console.log(name1, age)

const { name1: n, age: i } = person
console.log(n, i)


const { surname, humorous = true } = person
console.log(surname, humorous)

const{ adress: { street, number, cep}} = person
console.log(street, number, cep)

