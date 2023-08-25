const prod1 = {} // object ({} = literal way of writing an object)

prod1.name = 'Cell phone Ultra'
prod1.price = 4998.90
prod1['Discount'] = 0.40 // avoid attributes with space

console.log(prod1)

//Outra forma de de criar objrect

const prod2 = {
    name: 'Polo shirt',
    price: 79.90
}

console.log(prod2)
/*can create object within object
 obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
*/

//JSON (JavaScrip Object Notation)

'{ "nome": "Camisa polo", "preco": 79.90}'


