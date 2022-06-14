// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

//diagonalDifference takes the following parameter: int arr[n][m]: an array of integers

function diagonalDifference(arr) {
    let rightSum = 0
    let leftSum = 0
    for(let i=0; i < arr.length; i++){
        rightSum += arr[i][i]
        leftSum += arr[i][arr[i].length - (1 + i)]
    }
    const absoluteDiff = Math.abs(rightSum - leftSum)
    return absoluteDiff
}
