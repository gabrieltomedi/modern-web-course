function awaitFor(time = 2000) {
    return new Promise(resolve => {    
        setTimeout(() => {              
            resolve('test1')
        }, time)
    })
}

// awaitFor(2000)
//     .then(() => console.log('Running promise 1...') )
//     .then(awaitFor)
//     .then(() => console.log('Running promise 2...') )
//     .then(awaitFor)
//     .then(() => console.log('Running promise 3...') )

function returnValue() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(10)
        }, 5000);
    })
}

async function execute() {
    let value = await returnValue()

    await awaitFor(1500)
    console.log(`Async/Await ${value}...`)
    await awaitFor(1500)
    console.log(`Async/Await ${value + 1}...`)
    await awaitFor(1500)
    console.log(`Async/Await ${value + 2}...`)

    return value + 3
}

execute().then(console.log)