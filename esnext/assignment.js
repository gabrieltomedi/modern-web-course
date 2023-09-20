const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname,'data.txt')

function getFile(filePath) {
    return new Promise(resolve => {
        fs.readFile(filePath, (err, content) => {
            resolve(content.toString())
        })        
    })
}

getFile(filePath).then(content => content.split('\r\n'))
    .then(rows => rows.join(','))
    .then(content => `Final values: ${content}`)
    .then(console.log)