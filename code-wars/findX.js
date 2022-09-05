// We have a function that takes in an integer n, and returns a number x.
// The functions loops throught the number n and at every iteration, performs a nested loop on 2*n, at each iteration of this nested loop it increments x with the (nested loop index + parents loop index).
//So your task is to optimize the function findX, so it works well for large numbers.

function findX(n) {
    let x = 0;
    let r = 0;
    for (let i = 0; i < n; i++) {
      x += i;
      r += i
    }
    for (let j = 0; j < n*2; j++){
      x += j
    }
    return (x + r) * n;
  }