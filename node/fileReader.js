const fs = require('fs')

const path = __dirname + '/file.json'

// Synchronous 
const contents = fs.readFileSync(path, 'utf-8')
console.log(contents)

// asynchronous
fs.readFile(path, 'utf-8', (err, contents) => {
    const config = JSON.parse(contents)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./file.json')
console.log(config.db)

fs.readdir(__dirname, (err, files) => {
    console.log('contents in the file...')
    console.log(files)
})