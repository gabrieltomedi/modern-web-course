function workOrNot(value, errorChance) {
    return new Promise((resolve, reject) => {
        try{
            if(Math.random() < errorChance) {
                reject('An error has occured')
            } else{
                resolve(value)
            }
        } catch(e) {
            reject(e)
        }
    })
}

workOrNot('Testing...', 0.5)
    .then(value => console.log(`Value: ${value}`))
    //.then(v => consol.log(v), err => console.log(`Specific error.: ${err}`))
    .catch(err => console.log(err))