const school = "Cod3r"
console.log(school.charAt(4))
console.log(school.charAt(5)) // It doesn't give an error it just returns empty
console.log(school.charCodeAt(3)) // Get the char in that position showing its value in the UNICODE or ASCII table

console.log(school.indexOf('3'))// show the position of that char in the string

console.log(school.substring(1))
console.log(school.substring(0, 3)) // goes from index 0 to 3 without including 3

console.log('School '.concat(school).concat("!"))
console.log('School ' + school + "!")
console.log(school.replace(3, 'e'))
console.log(school.replace(/\w/g, 'e')) /*  regular expression - regex
- /\d/ replace all digits
- /\w/g all letters or digits (g = global)

*/

console.log('ana,Maria,Pedro'.split(',')) // generates an array breaking from the ','
console.log('ana,Maria,Pedro'.split(/,/))

//console.log('ana,Maria,Pedro'.split(/./)) the dot has another function in the regex