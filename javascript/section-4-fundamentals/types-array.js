const values = [7.7, 8.9, 6.3, 9.2]
console.log(values[0], values[3])
console.log(values[0], values[4]) // does not exist, returns undefined

//values[6] = 10;
values[4] = 10;
console.log(values)
console.log(values.length)

values.push({ id: 3 }, false, null, 'test')
console.log(values)
console.log(values.pop()) // remove last value from array
delete values[0]
console.log(values)

console.log(typeof values)
