// Let us consider this example (array written in general format):
// ls = [0, 1, 3, 6, 10]
// The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]
// The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above.
// Take a look at performance: some lists have thousands of elements.

function partsSums(ls){
    const length = ls.length
    ls.reverse()
    let result = []
    if(length === 0) result.push(0)
    if(length !== 0){
      let sum = 0
      result.push(sum)
      for(let i = 0; i < length; i++){
        sum += ls[i]
        result.push(sum)
      }
    }
    result.reverse()
    return result
  }

  partsSums([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358])