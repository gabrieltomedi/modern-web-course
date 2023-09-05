const PORT = 3003

const express = require('express')
const app = express()

app.get('/products', (req, res, next) => {
    console.log('Middler 1...')
    next()
})

app.get('/products', (req, res, next) => {
    res.send({name: 'Notebook', price: 2341.21}) // convert to json
})

app.listen(PORT, () => {
    console.log(`Server is online on port ${PORT}.`)
})