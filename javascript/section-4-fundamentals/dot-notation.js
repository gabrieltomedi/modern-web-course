console.log(Math.ceil(6.1)) 

const obj1 = {}
obj1.name = 'ball'
//obj1['name'] = 'Bola2'
console.log(obj1.name)

function Obj(name) {
    this.name = name 
    this.exec = function () {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Chair')
const obj3 = new Obj('Table')
console.log(obj1.name)
console.log(obj2.name)
console.log(obj3.name)
obj3.exec()