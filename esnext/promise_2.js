// setTimeout(() => {
//     console.log('Executing callback')

//     setTimeout(() => {
//         console.log('Executing callback 2')

//         setTimeout(() => {
//             console.log('Executing callback 3')
//         }, 2000);
//     }, 2000);    
// }, 2000);

function waitFor(time = 2000) {
    return new Promise(resolve => {    
        setTimeout(() => {  
            console.log('Running promise...') 
            resolve('test1')
        }, time)
    })
}

 waitFor().then(() => waitFor()).then(waitFor)