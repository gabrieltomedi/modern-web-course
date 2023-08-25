function area(width, altura) { // not considered a valid function in practice
    const area = width * height
    if (area > 20) {
        console.log(`Above the allowed value ${area}m2.`)
    } else {
        return area
    }
}

console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(2, 3, 17, 22, 44))// does not use all parameters
console.log(area(5, 5))
