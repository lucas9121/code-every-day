//Find the first character that repeats in a String and return that character.
//This is not the same as finding the character that repeats first. In that case, an input of 'tweet' would yield 'e'.

function firstDup (s) {
    const map = new Map()
    for (let char of s){
        let value = map.get(char)
        map.set(char, (value +=1) || 1)
    }
    for(let [key, value] of map){
        if(value > 1){
        return key
        }
    }
}

firstDup('tweet')