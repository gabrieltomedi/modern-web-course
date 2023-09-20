function generateNumberBetween(min, max, time) {
    if (min > max) [max, min] = [min, max] // invert values with destructuring 

    return new Promise(resolve => {
        setTimeout(() => {
            const random1 = parseInt(Math.random() * (max - min + 1)) + min
            resolve(random1)
        }, time)
    })
}

function generateNumbers() {
    return Promise.all([
        generateNumberBetween(1, 69, 4000),
        generateNumberBetween(1, 69, 500),
        generateNumberBetween(1, 69, 3000),
        generateNumberBetween(1, 69, 100),
        generateNumberBetween(1, 69, 1500)
    ])
}

generateNumbers().then(numbers => console.log(numbers))