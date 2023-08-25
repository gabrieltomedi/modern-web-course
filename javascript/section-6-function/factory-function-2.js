function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
        /*pode colocar um grupo de
         funções dentro do objeto */
    }
}

console.log(criarProduto('notebook', 2199,49))
console.log(criarProduto('ipad', 1199,49))