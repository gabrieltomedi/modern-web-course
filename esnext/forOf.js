for (let letter of "Gabriel" ) {
    console.log(letter)
}


const topicsEcma = ['Map', 'Set', 'Promise']

console.log('----- For In -----')
for (let i in topicsEcma) {
   
    console.log(i)
}

console.log('----- For Of -----')
for (let topic of topicsEcma) {
    
    console.log(topic)
}

const topicsMap = new Map([
    ['Map', { addressed: true }],
    ['Set', { addressed: true }],
    ['Promise', { addressed: false }],
])

console.log('----- Map -----')
for (let topic of topicsMap) {
    console.log(topic)
}

for (let topic of topicsMap.keys()) {
    console.log(topic)
}

for (let topic of topicsMap.values()) {
    console.log(topic)
}

for (let [ch, vl] of topicsMap) { // Destructuring
    console.log(ch, vl)
}


console.log('----- Set -----')

const s = new Set(['a', 'b', 'c'])
for (let letter of s) {
    console.log(letter)
}