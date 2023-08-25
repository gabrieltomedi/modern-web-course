const products = [
    { name: 'Notebook', price: 2499, fragile: true},
    { name: 'iPad Pro', price: 4199, fragile: true},
    { name: 'Glass cup', price: 12.49, fragile: true},
    { name: 'Plastic cup', price: 18.99, fragile: false}
]

console.log(products.filter(function(p) {
    return false
}))

const expensive = produto => produto.price >= 500
const fragile = produto => produto.fragile

console.log(products.filter(expensive).filter(fragile))
