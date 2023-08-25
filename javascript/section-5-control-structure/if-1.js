function averageGrade(grade) {
    if (grade >= 7) {
        console.log('Approved with ' + grade)
    }
}

averageGrade(8.1)
averageGrade(6.1)

function ifTrueISpeak(valor) {
    if (valor) {
        console.log('Is true... ' + valor)
    }
}

ifTrueISpeak()
ifTrueISpeak(null)
ifTrueISpeak(undefined)
ifTrueISpeak(NaN)
ifTrueISpeak('')
ifTrueISpeak(0)
ifTrueISpeak(-1)
ifTrueISpeak(' ')
ifTrueISpeak('?')
ifTrueISpeak([])
ifTrueISpeak([1, 2])
ifTrueISpeak({})