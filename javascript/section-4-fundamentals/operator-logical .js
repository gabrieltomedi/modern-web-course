function shopping(job1, job2) {
    const shoppingIceCream = job1 || job2
    const shoppingTv50 = job1 && job2
    //const shoppingTv32 = !!(job1 ^ job2) // bitwise xor
    const shoppingTv32 = job1 != job2 
    const keepHealthy = !shoppingIceCream 
    
    return { shoppingIceCream, shoppingTv32, shoppingTv50, keepHealthy }
}

console.log(shopping(true,true))
console.log(shopping(true,false))
console.log(shopping(false,true))
console.log(shopping(false,false))