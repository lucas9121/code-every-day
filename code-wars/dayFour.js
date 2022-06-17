// Given an integer n and two other values, build an array of size n filled with these two values alternating.

function alternate(n, firstValue, secondValue){
    arr = []
    for (let i = 0; i < n; i++){
        if(i %2 === 0) arr.push(firstValue)
        if(i %2 === 1) arr.push(secondValue)
    }
    return arr
}

alternate(10, "blue", "red")


