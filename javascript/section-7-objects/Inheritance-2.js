// prototype chain
Object.prototype.attr0 = '0' // avoid doing this (may impact the entire system)
const grandfather = { attr1: 'A'}
const father = {__proto__: grandfather, attr2: 'B', attr3: '3'}
const son = {__proto__: father, attr3: 'C'}
console.log(son.attr1)
console.log(son.attr0)
console.log(son.attr3)
console.log(son.attrA)

const car = {
    currentSpeed: 0,
    maxSpeed: 200,
    speedUp(delta) {
        if (this.currentSpeed + delta <= this.maxSpeed){
            this.currentSpeed += delta
        } else {
            this.currentSpeed = this.maxSpeed
        }
    },
    status() {
        return `${this.currentSpeed}km/h de ${this.maxSpeed}km/h`
    }
}

const ferrari =  {
    model: 'F40',
    maxSpeed: 324 //shadowing - method override
}

const volvo = {
    model: 'V40',
    status() {
        // .super nvokes the father prototype function if they use the same name
        return `${this.model}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, car)
Object.setPrototypeOf(volvo, car)

console.log(ferrari)
console.log(volvo)

volvo.speedUp(100)
console.log(volvo.status())

ferrari.speedUp(200)
console.log(ferrari.status())