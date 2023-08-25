// standard function
let double1 = function(a){
    return 2 * a
}
// Arrow function
double1 = (a) => {
    return 2 * a
}

double1 = a => 2 * a 
console.log(double1(Math.PI))

let greeting = function() {
    return 'Hello'
}

greeting = () => 'Hi'
greeting = _ => 'Hi' 
console.log(greeting())  