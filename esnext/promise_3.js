function generateNumberBetween(min, max) {
    if (min > max) {
        [max, min] = [min, max] // invert values with destructuring
    }

    return new Promise(resolve => {
        const random1 = parseInt(Math.random() * (max - min + 1)) + min
        resolve(random1)
    })
}

generateNumberBetween(1, 60).then(num => num * 10)
    .then(numX10 => `The generated number is ${numX10}`)
    .then(console.log)