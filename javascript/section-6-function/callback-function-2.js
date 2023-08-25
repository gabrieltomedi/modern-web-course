const grades = [7.1, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Without using callBack
const lowGrade = []
for (let i in grades) {
    if (grades[i] < 7) {
        lowGrade.push(grades[i])
    }
}
console.log(lowGrade)

// using callBacks
const lowGrade2 = grades.filter(function (grades){
    return grades < 7
})

console.log(lowGrade2)

// with arrow function
const gradesBaixas3 = grades.filter(grades => grades < 7)

console.log(gradesBaixas3)

// best way
const gradesMenorQue7 = grades => grades < 7 // can be reused elsewhere
const gradesBaixas4 = grades.filter(gradesMenorQue7)

console.log(gradesBaixas4)