function ExceptionHandling(erro) {
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'message'
    throw {
        name: error1.name,
        msg: error1.message,
        date: new Date
    }
}

function printName(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        ExceptionHandling(e)
    } finally {
        console.log('End')
    }
}

const obj = { name: 'Roberto' }
printName(obj)