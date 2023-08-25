const value = 'Global'

function myFunction() {
    console.log(value)
}

function exec() {
    const value = 'Local'
    myFunction()
}

exec()