let isActive = false;
console.log(isActive);

isActive = true;
console.log(isActive);

isActive = 1;
console.log(!!isActive); // ! = negation (2 negation = TRUE)
console.log(!isActive);

console.log('True... ')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'text')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isActive = true))


console.log('False... ')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isActive = false))

console.log('To finish...')

console.log(!!('' || null || 0 || ' ')) // || = or

let nome = ''

console.log(nome || 'Unknown')
