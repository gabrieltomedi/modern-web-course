const cart = [
    '{ "name": "Rubber", "price": 3.45}',
    '{ "name": "Bok", "price":  13.90}',
    '{ "name": "pencil kit", "price": 41.22}',
    '{ "name": "Pen",  "price": 7.50}'
]

const toObject1 = json => JSON.parse(json)
const price = produto => produto.price


// let result2 = cart.map(function(e) {
//     return JSON.parse(e)
// }).map(e => e.price) 

let  rersult =  cart.map(toObject1).map(price)
console.log(rersult)