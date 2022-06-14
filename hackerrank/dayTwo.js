//Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

function plusMinus(arr) {
    let positiveNums = (arr.filter((num) => num > 0).length / arr.length).toFixed(6)
    let negativeNums = (arr.filter((num) => num < 0).length / arr.length).toFixed(6)
    let zero = (arr.filter((num) => num === 0).length / arr.length).toFixed(6)
    console.log(positiveNums + ' \n' + negativeNums + ' \n' + zero)
}

plusMinus([3, 0, -2, 5, -8, 87])

//Write a program that prints a staircase of size n using #
function staircase(n) {
    let hash = '#'
    for(let i = 1; i <= n; i++){
        let triangle = hash.repeat(i)
        console.log(triangle.padStart(n))
    }
}

staircase(8)

//Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

function miniMaxSum(arr) {
    let minNum = Math.min(...arr)
    let maxNum = Math.max(...arr)
    let sum = arr.reduce((total, num) => total + num, 0)
    let miniSum = sum - maxNum
    let maxSum = sum - minNum
    console.log(miniSum, maxSum)
}

miniMaxSum([7, 69, 2, 221, 8974])