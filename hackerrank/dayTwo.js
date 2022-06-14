//Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

function plusMinus(arr) {
    let positiveNums = (arr.filter((num) => num > 0).length / arr.length).toFixed(6)
    let negativeNums = (arr.filter((num) => num < 0).length / arr.length).toFixed(6)
    let zero = (arr.filter((num) => num === 0).length / arr.length).toFixed(6)
    console.log(positiveNums + ' \n' + negativeNums + ' \n' + zero)
}