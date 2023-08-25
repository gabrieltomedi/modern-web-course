console.log('a= ',a)
var a = 2
console.log('a= ', a)

/* Hoisting brings the Var declaration to the beginning and the initialization remains in place
var a
console.log('a= ',a)
a = 2
console.log('a= ',a)
*/

// Effect is same inside function()
function test() {
    console.log('b= ', b)
    var b = 3
    console.log('b= ', b)
}
test()
/* in the case of let, it does not have the effect of hoisting
console.log('c= ', c)
let c = 2
console.log('c= ', c)

*/