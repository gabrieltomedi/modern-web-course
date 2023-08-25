    const sum1 = function (x, y) {
        return x + y
    }

    const printResult = function (a, b, operation = sum1) {
            console.log(operation(a, b))
    }

    printResult(3, 4)
    printResult(3, 4, sum1)
    printResult(3, 4, function (x, y) { 
        return x - y
    }) 
    printResult(3, 4, (x, y) => x * y)

    const person = {
        speak: function (){
            console.log('Hey!')
        }
    }

    person.speak()