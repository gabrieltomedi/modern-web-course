// improvements to object literal notation (ECMAScript 2015)improvements to object literal notation (ECMAScript 2015)
const a = 1
const b = 2
const c = 3

// olde version
const obj1 = {a: a, b: b, c: c}

// Current does not need duplicity in case of names equal to const
const obj2 = {a, b, c}

console.log(obj1, obj2)

// dynamically create an attribute of an obj using a string
const nameAttr = 'grade'
const valueAttr = 7.87

const obj3 = {}
obj3[nameAttr] = valueAttr
console.log(obj3)

const obj4 = {[nameAttr]: valueAttr}
console.log(obj4)

// another simplified one of how to define functions inside an obj literal
// old way
const obj5 = {
    funcao1: function() {
        //....

    }, // new way
    funcao2() {

    }
}

console.log(obj5)