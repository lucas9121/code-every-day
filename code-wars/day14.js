
//Write a function that takes a piece of text in the form of a string and returns the letter frequency count for the text. This count excludes numbers, spaces and all punctuation marks. Upper and lower case versions of a character are equivalent and the result should all be in lowercase.
//The function should return a list of tuples (in Python and Haskell) or arrays (in other languages) sorted by the most frequent letters first. The Rust implementation should return an ordered BTreeMap. Letters with the same frequency are ordered alphabetically

function letterFrequency(text){
    const obj = {}
    for (let char of text) {
        let charCode = char.charCodeAt()
      if((charCode >= 65 && charCode <= 90 ) || (charCode >= 97 && charCode <= 122 )) {
        char = char.toLowerCase()
        obj[char] = ++obj[char] || 1
      }
    }
    const res = Object.entries(obj)
    res.sort((a, b) => {
      if(a[1] < b[1]) return 1
      if(a[1] > b[1]) return -1
      if(a[1] === b[1]) {
        if(a[0] < b[0]) return -1
        if(a[0] > b[0]) return 1
      }
    })
    console.log(res)
    return res
}

letterFrequency("meu:oyxd.a,c'clex,hm TaEwA")

// Let's play rock, paper, scissors! You have to return which player won! In case of a draw return Draw!.

const rps = (p1, p2) => {
    return p1 === 'scissors' && p2 === 'paper' ? "Player 1 won!" :
    p1 === 'scissors' && p2 === 'rock' ? "Player 2 won!" :
    p1 === 'rock' && p2 === 'paper' ? "Player 2 won!" :
    p1 === 'rock' && p2 === 'scissors' ? "Player 1 won!" :
    p1 === 'paper' && p2 === 'scissors' ? "Player 2 won!" :
    p1 === 'paper' && p2 === 'rock' ? "Player 1 won!" :
    "Draw!"
  };

  