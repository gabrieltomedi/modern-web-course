require('./global')

console.log(MyApp.greeting() + ' - ' + MyApp.name)

MyApp.name = 'Global test 2'

console.log(MyApp.name)