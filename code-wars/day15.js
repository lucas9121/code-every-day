//Write a function that returns both the minimum and maximum number of the given list/array.
function minMax(arr){
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    return [min,max];
}

minMax([1,2,3,4,5])
