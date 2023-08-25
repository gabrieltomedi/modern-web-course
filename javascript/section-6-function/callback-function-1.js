    const manufacturers = ["mercedes", "audi", "BMW"]

    function print1(name, index){
        console.log(`${index + 1}. ${name}`)
    }

    manufacturers.forEach(print1)   
    manufacturers.forEach(function (manufacturers){
        console.log(manufacturers)
    })
    manufacturers.forEach(manufacturers => console.log(manufacturers))