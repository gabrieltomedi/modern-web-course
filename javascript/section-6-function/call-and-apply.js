function getPrice(tax = 0, currency = 'R$') {
    return `${currency} ${this.price * (1 - this.disc ) * (1 + tax)}`

}

const produto = {
    nome: 'Notebook',
    price: 4589,
    disc: 0.15,
    getPrice
}

global.price = 20
global.disc = 0.1
console.log(getPrice())
console.log(produto.getPrice())
const carro = { price: 49990, disc: 0.20}

console.log(getPrice.call(carro))
console.log(getPrice.apply(carro))

console.log(getPrice.call(carro, 0.15, '$'))
console.log(getPrice.apply(carro, [0.17, '$']))//  the difference is that it passes an array
console.log(getPrice.apply(global, [0.15, '$']))