console.log(typeof Array, typeof new Array, typeof [])

let approved = new Array('Bia', 'Carlos', 'Ana')
console.log(approved)

approved = ['bia', 'Clarlos', 'Ana']
console.log(approved[0])
console.log(approved[1])
console.log(approved[2])
console.log(approved[3])

approved[3] = 'Paulo' 
approved.push('Abia') 
console.log(approved.length)

approved[9] = 'Rafael'
console.log(approved.length)
console.log(approved[8] === undefined)

console.log(approved)
approved.sort() 
console.log(approved)

delete approved[1]
console.log(approved[1])
console.log(approved[2])

approved = ['bia', 'Carlos', 'Ana']
approved.splice(1, 1)
//approved.splice(1, 2, 'Eletento 1', 'Element2') 
console.log(approved) 