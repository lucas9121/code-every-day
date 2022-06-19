// Your goal in this kata is to implement a difference function, which subtracts one list from another.
// It should remove all values from list a, which are present in list b. Each element x in both arrays is integer and 0 ≤ x ≤ 25. And lengths of arrays can reach 5 000 000 elements.

function arrayDiffVeryFast(a, b) {
    let res = []
    let filter = []
    for(let i = 0; i < b.length; i++){
      if(!filter.includes(b[i])){
        filter.push(b[i])
      }
    }
    for(let i = 0; i < a.length; i++){
      if(filter.indexOf(a[i]) === -1){
        res.push(a[i])
      }
    }
    return res
  }

  arrayDiffVeryFast([1,2,2,2,3,5,5,1,2,4,5,1], [2,1,5])