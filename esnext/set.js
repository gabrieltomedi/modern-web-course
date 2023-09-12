const teams = new Set()
teams.add('Team A')
teams.add('Team B').add('Team C').add('Team D')
teams.add('Team E')
teams.add('Team A')

console.log(teams)
console.log(teams.size)
console.log(teams.has('team A'))
console.log(teams.has('Team A'))
teams.delete('Team C')
console.log(teams.has('Team C'))

const names = ['Rachel', 'Gabriel', 'Astolfo', 'Gabriel']
const namesSet = new Set(names)
console.log(namesSet)
