{
    {
        {
            {
                var test = 'test...'
                console.log(test)
            }
        }
    }
}
console.log(test) // Var is visible outside the block in which it was defined

function test() {
    var local = 123
    console.log(local)
}
test()
console.log(local)


