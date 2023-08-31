const counterA = require('./singleInstance')
const counterB = require('./singleInstance')

const counterC = require('./newInstance')()
const counterD = require('./newInstance')()

counterA.increment()
counterA.increment()
console.log(counterA.value, counterB.value)

counterC.inc()
counterC.inc()
console.log(counterC.value, counterD.value)