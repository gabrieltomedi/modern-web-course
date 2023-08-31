const moduleA = require('../../moduleA')
console.log(moduleA.greeting)

const test1 = require('test1')
console.log(test1.greeting)

const c = require('./folderC')
console.log(c.greeting2)

const http = require('http')
http.createServer((req, res) => {
    res.write('Goog Morning!')
    res.end()
}).listen(8080)