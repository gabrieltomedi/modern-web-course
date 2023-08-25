function Car(maxSpeed = 200, delta =5){
    // Private attribute (cannot be instantiated by another object)
    let currentSpeed =0

    //Metodo publico
    this.accelerate = function () {
        if(currentSpeed + delta <= maxSpeed){
            currentSpeed += delta
        } else {
            currentSpeed = maxSpeed
        }
    }

    //metodo publico
    this.getCurrentSpeed = function () {
        return currentSpeed
    }
}

const uno = new Car
uno.accelerate()
console.log(uno.getCurrentSpeed())

const ferrari = new Car(350, 20)
ferrari.accelerate()
ferrari.accelerate()
ferrari.accelerate()
console.log(ferrari.getCurrentSpeed())

console.log(typeof Car)
console.log(typeof ferrari)