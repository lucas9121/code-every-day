// Write a function which takes in a string and returns counts of each character in the string

function charCount(str) {
    const obj = {}
    for (let i = 0; i < str.length; i++) {
        // lowercase entire string to avoid upper and lower count of same letter
        let char = str[i].toLowerCase()
        //regular expression check for alphanumeric character
        if(/[a-z0-9]/.test(char)) {
            // if object key already exists add 1 more
            if(obj[char] > 0) {
                obj[char]++
            } 
            //otherwise, create a new object key and set its value to 1
            else {
                obj[char] = 1
            }
        }
    }
    return obj
}

charCount('Hello World!')

//Refactor it to make it more efficient 

function newCharCount(str) {
    let obj = {}
    // use for of loop to make it look neater
    for(let char of str) {
        // Recursion for alphanumeric check
        if(isAlphaNumeric(char)) {
            // lower case after weeding out non alphanumeric characters
            char = char.toLowerCase()
            // if else in one line
            obj[char] = ++obj[char] || 1
        }
    }
    return obj
}

// Regular expression performance can vary in JavaScript
// Finding the character code of a specific letter is faster than cheking for regular expression because it uses simple mathmetic comparison
function isAlphaNumeric(char){
    // code will be eacher letter's character code
    let code = char.charCodeAt(0)
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z) 
        return false
    }
    return true
}

newCharCount("Why do we always write 'Hello World!'")






// Frequency Counter
function same(arr1, arr2) {
    if(arr1.length !== arr2.length) return false
    const frequencyCounter1 = {}
    const frequencyCounter2 = {}
    for(let element of arr1){
        frequencyCounter1[element] = (frequencyCounter1[element] || 0) + 1
    }
    for(let element of arr2){
        frequencyCounter2[element] = (frequencyCounter2[element] || 0) + 1
    }
    for(let key in frequencyCounter1){
        // checks if array 2 has the exponent
        if(!(key ** 2 in frequencyCounter2)) return false
        // checks if both objects have the same quantity of values
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false
    }
    return true
}

same([1,2,4,3], [2,6,4,8])


function validAnagram(str1, str2){
    // add whatever parameters you deem necessary - good luck!
    if(str1.length !== str2.length) return false
    const objAn1 = {}
    const objAn2 = {}
    for(let char of str1){
        objAn1[char] = (objAn1[char] || 0) + 1
    }
    for(let char of str2){
        objAn2[char] = (objAn2[char] || 0) + 1
    }
    for(let key in objAn1){
        if(objAn1[key] !== objAn2[key]) return false
    }
    return true
}