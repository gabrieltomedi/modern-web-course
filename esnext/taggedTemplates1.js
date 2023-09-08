// Tagged Templates - process the template inside of a function
function tag(parts, ...values){
    console.log(parts)
    console.log(values)
    return 'Other String'
}

const student = 'Gui'
const situation = 'Approved'
console.log(tag `${student} is ${situation}`)