/*
    DEFINITION
    ----------
    Recursion is a function that calls itself
        - An exit condition prevents this from turning into an infinite loop
        - Must keep track of all the function calls as you plan your recursive function

    SOURCE
    ------
    (Web Dev Simplified: What is Recursion - In Depth)
    https://www.youtube.com/watch?v=6oDQaB2one8 
*/

//#region example 1
// non-recursive
function countDown(n) {
    for (let i = n; i > 0; i--) {
        console.log(i)
    }
    console.log('Hurray!')
}

// recursive version
// instead of using a loop, you will just call the function within itself
function countDownRecursive(n) {
    // set up clause to break out of function
    // in the non-recursive function, the clause was stated in the for loop as i > 0
    // for the recursive function, our clause needs to be "when n is less than or equal to 0, break out of the function"
    if (n <= 0) {
        // this statement goes here because it is what is called once the loop is finished in the first function
        console.log("Hurray!")
        return
    }
    // now, code the logic for the functionality of the function
    console.log(n)
    // call the function within the function to
    // begin looping, but this time make sure to decrement (because that's what we did in the non-recursive function -> i--)
    countDownRecursive(n - 1)
}

// keeping track of calls -> nested function calls
// countDownRecursive(3) 
//     countDownRecursive(2)
//         countDownRecursive(1)
//             countDownRecursive(0)
//                 return
//             return
//         return
//     return
// return

//#endregion

//#region example 2
function sumRange(n) {
    let total = 0;
    for (let i = n; i > 0; i--) {
        total += i
    }
    return total
}

// because we are using recursive functions, we cannot declare the total variable within the function due to variable scope, so it must be passed in

// initiate total to be 0 
function sumRangeRecursive(n, total = 0) {
    // break clause
    if (n <= 0) {
        return total
    }
    // calling function within
    // first arg = set n to decrement
    // second arg = add n iteration to total 
    return sumRangeRecursive(n - 1, total + n)
}

// keeping track of calls/iterations
// always checking first argument if it equals zero in order to know when to break out of function
// sumRangeRecursive(3, 0) 
//     sumRangeRecursive(2,3) // 2nd arg: 0+3
//         sumRangeRecursive(1, 5) // 2nd arg: 3+2
//             sumRangeRecursive(0, 6) // 2nd arg: 5+1
//             return 6 // (lines 64-66) returns total 
//         return 6 // -> jumps to line 70, returns total
//     return 6 // -> jumps to line 70, returns total
// return 6 // -> jumps to line 70, returns total

//#endregion

//#region example 3
// the following code is evidence for why recursions exist. looping won't work here

function printChildrenRecursive(t) {
    // break clause
    // if there are no children, break out
    if (t.children.length === 0) {
        return
    }
    // loop through children
    t.children.forEach(child => {
        console.log(child.name)
        printChildrenRecursive(child)
    })
}

const tree = {
    name: 'John',
    children: [
        {
            name: 'Jim',
            children: []
        },
        {
            name: 'Zoe',
            children: [
                { name: 'Kyle', children: [] },
                { name: 'Sophia', children: [] }
            ]
        }
    ]
}

// keeping track of calls
// printChildrenRecursive('John')
//     printChildrenRecursive('Jim')
//     return
//     printChildrenRecursive('Zoe')
//         printChildrenRecursive('Kyle')
//         return
//         printChildrenRecursive('Sophia')
//         return
//     return // zoe
// return // john

//#endregion




