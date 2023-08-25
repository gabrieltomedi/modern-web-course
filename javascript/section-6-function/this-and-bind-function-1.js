const person = {
    greeting: 'Good morning',
    speak() {
        console.log(this.greeting) 
    }
}
person.speak()

const speak = person.speak
speak() 

const speak2 = person.speak.bind(person) 
speak2()