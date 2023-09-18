let p = new Promise( resolve => {
    resolve(['Ana', 'Bia', 'Calos', 'Lucas'])
})

const firstElment = array => array[0]



p.then(firstElment).then(firstElment)
    .then(letter => letter.toLowerCase())
    .then(lowerCase => console.log)