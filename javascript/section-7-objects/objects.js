const product = new Object 
product.name = 'chair'
product['product brand'] = 'Refrigerator'
product.price = 220

console.log(product)
delete product.price
delete product['product brand']

console.log(product)

const car = {
    model: 'A4',
    value: 8900,
    owners: {
        name: 'Raul',
        age: 56,
        address: {
            street: 'street ABC',
            number: 123
        }
    },
    condutores: [{
        name: 'Junior',
        age: 19
    }, {
        name: 'Ana',
        age: 42
    }],
    calculateInsurance: function() {
        // ...
    }
}

console.log(car)

car.owners.address.number = 1000
car['owners'] ['address'] ['street'] = 'Av test'
console.log(car)

delete car.condutores
delete car.owners.address
delete car.calculateInsurance

console.log(car)
console.log(car.condutores)