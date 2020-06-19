// from Web Dev Simplified video tutorial
// JavaScript Promises in 10 Minutes
// 

let p = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a == 2) {
        resolve('Success')
    } else {
        reject('Failed')
    }
})

// then to resolve, catch for reject
p.then((message) => {
    console.log("This is in the then: " + message)
}).catch((message) => {
    console.log("This is in the catch: " + message)
})