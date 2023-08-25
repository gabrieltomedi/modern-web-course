// Using literal notation
const obj1  = {}
console.log(obj1)

// Object in JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

function product(name, preco, disc) {
    this.name = name //this torna o atributo publica
    this.getDiscountPrice = () => {
        return preco * (1 - disc)
    }
}

const p1 = new product('Pen', 7.99, 0.15)
const p2 = new product('Notebook', 2998.99, 0.25)
console.log(p1.getDiscountPrice(), p2.getDiscountPrice())


// Factory Function
function createEmployee(name, BaseSalary, absences) {
    return{
        name,
        BaseSalary,
        absences,
        getSalary() {
            return (BaseSalary / 30) * (30 - absences)
        }

    }
}

const f1 = createEmployee('João', 7980, 4)
const f2 = createEmployee('Maria', 11400, 1)
console.log(f1.getSalary(), f2.getSalary())

// Object.create
const daughter = Object.create(null)
daughter.name = 'Ana'
console.log(daughter)

// A function that returns Object (converts JSON to objects)
const fromJSON = JSON.parse('{"info": "JSON"}')
console.log(fromJSON.info)