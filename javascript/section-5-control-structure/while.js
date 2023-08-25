function getRandomNumber(min, max) {
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}

let option = 0

while (option != -1) {
    option = getRandomNumber(-1, 10)
    console.log(`Chosen option was ${option}.`)
}
console.log('end')
