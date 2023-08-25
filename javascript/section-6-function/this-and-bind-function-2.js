function Person(){
    this.age = 0
    const self = this
    setInterval(function(){
        this.age++
        console.log(/*this*/self.age) 
    }/*.bind(this)*/, 1000)  
}
new Person