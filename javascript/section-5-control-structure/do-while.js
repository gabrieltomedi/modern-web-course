function getRandomNumber(min, max) {
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}

let option = -1

do {
    option = getRandomNumber(-1, 10)
    console.log(`Chosen option was ${option}.`)
} while (option != -1)
console.log('end')
