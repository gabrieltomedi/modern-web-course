const os = require('os')

const anonymous = process.argv.indexOf('-a') !== -1
// console.log(anonymous)

if(anonymous) {
    process.stdout.write(`Hello anonymous!${os.EOL}`) // standard output
    process.exit()
} else {
    process.stdout.write('Inform your name: ')
    process.stdin.on('data', data => {  // standard input
        const name = data.toString().replace(os.EOL, '')

        process.stdout.write(`Hi ${name}! ${os.EOL}`)
        process.exit()
    })
}