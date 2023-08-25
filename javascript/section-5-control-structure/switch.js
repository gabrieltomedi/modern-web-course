const printResult = function (grade) {
    switch (Math.floor(grade)) {
        case 10:
        case 9:
            console.log('Honor board')
            break 
        case 8: case 7:
            console.log('Approved')
            break
        case 6: case 5: case 4:
            console.log('Retake')
            break
        case 3: case 2: case 1: case 0:
            console.log('Flunk')
            break
        default:
            console.log('Invalid grade')            
    }
}

printResult(10)
printResult(8.9)
printResult(6.55)
printResult(2.3)
printResult(-1)
printResult(11)