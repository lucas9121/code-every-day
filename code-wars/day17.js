// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.
// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.
// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.
// If a string contains all repeating characters, it should return an empty string ("") or None

function firstNonRepeatingLetter(s) {
    let result = ''
    if(s === '') return result
    const letters = new Map()
    for(let char of s){
      char = char.toLowerCase()
      let value = letters.get(char)
      letters.set(char, (value += 1) || 1)
      console.log(letters.get(char))
    }
    result = [...letters].find(([key, value]) => value === 1) || s.length + 1
    // if index is greater than length charAt returns an empty string
    return s.charAt(s.toLowerCase().indexOf(result[0]))
}

firstNonRepeatingLetter('WJSPxqXwweW eTJSvpagktvpaktbrnpXrrnprlvdymlTrvdyh vrhvrPgluSbzzelgluxq')