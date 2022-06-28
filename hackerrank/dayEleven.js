// Dictionaries and Maps
// Given n names and phone numbers, assemble a phone book that maps friends' names to their respective phone numbers. You will then be given an unknown number of names to query your phone book for. For each name queried, print the associated entry from your phone book on a new line in the form name=phoneNumber; if an entry for name is not found, print Not found instead.
// Note: Your phone book should be a Dictionary/Map/HashMap data structure.

function processData(input) {
    const inputArr = input.split('\n')
    let n = parseInt(inputArr.slice(0, 1))
    for (let i = 1; i <= n; i++){
        inputArr[i] = inputArr[i].split(' ')
    }
    const phoneBook = new Map(inputArr.slice(1, n + 1))
    for(let i = n +1; i <inputArr.length; i++){
        let found = phoneBook.has(`${inputArr[i]}`)
        if(!found){
            console.log('Not found')
        } else {
            console.log(`${inputArr[i]}=${phoneBook.get(inputArr[i])}`)
        }
    }
} 

processData("3\nsam 99912222\ntom 11122222\nharry 12299933\nsam\nedward\nharry")