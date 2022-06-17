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

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

function toCamelCase(str){
    const arr = str.split('')
    for (let i = 0; i < arr.length; i++){
      if(arr[i] === "-" || arr[i] === "_"){
        arr[i + 1] = arr[i + 1].toString().toUpperCase()
        arr.splice(i, 1)
      }
    }
    return arr.join('')
}

toCamelCase("the_stealth_warrior")


