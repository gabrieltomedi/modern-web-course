function generateNumberBetween(min, max, BannedNumbers) {
    if (min > max) [max, min] = [min, max]

    return new Promise((resolve, reject) => {
        const random1 = parseInt(Math.random() * (max - min + 1)) + min
        if (BannedNumbers.includes(random1)) {
            reject('Repeated number')
        } else {
            resolve(random1)
        }
    })
}

async function generateNumbers(numbersAmount) {
    const numbers = []
    for (let i of Array(numbersAmount).fill()) {
        numbers.push(await generateNumberBetween(1, 60, numbers))
    }
    return numbers

}

generateNumbers(8)
    .then(console.log)
    .catch(console.log)