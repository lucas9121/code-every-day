//Dictionaries and Maps

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