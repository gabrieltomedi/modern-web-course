const fs = require('fs')

const product = {
    name: 'Iphone',
    price: 1249.99,
    discount: 0.15
}

fs.writeFile(__dirname + '/generatedFile.json', JSON.stringify(product), err => {
    console.log(err || 'File created')
})