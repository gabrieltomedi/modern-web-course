/* Closure is the scope created when a
   function is declared */

/* This scope allows the function to access
   and manipulate variables external to the function */

const x = 'Global'

function Outside() {
    const x = 'Local'
    function Inside() {
        return x
    }
    return Inside
}

const myFunction = Outside()
console.log(myFunction())