class Grandfather {
    constructor(surname) {
        this.surname = surname
    }
}

class Father extends Grandfather { 
    constructor(surname, profession = 'Teacher'){
        super(surname)
        this.profession = profession
    }
    getName(){
        return this.surname
    }
}

class son extends Father {
    constructor() {
        super('Silva')
    }
}

const son = new son
console.log(son)

const Father1 = new Father('pp')
console.log(Father1.getName())

console.log(Father1)