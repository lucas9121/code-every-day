// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

function timeConversion(s) {
    const arr = s.split('')
    arr.pop()
    arr.pop()
    const hourArr = [arr[0], arr[1]]
    let hour = parseInt(hourArr.join(''))
    let result = arr.join('')
    if(s.includes('PM')){
        if(hour !== 12) hour += 12
        let hourStr = hour.toString().split('')
        arr.shift()
        arr.shift()
        arr.unshift(hourStr[1])
        arr.unshift(hourStr[0])
        result = arr.join('')
    } else if(s.includes('AM') && hour === 12){
        hour -= 12
        let hourStr = hour.toString().split('')
        hourStr.push('0')
        arr.shift()
        arr.shift()
        arr.unshift(hourStr[1])
        arr.unshift(hourStr[0])
        result = arr.join('')
    }
    return result
}

timeConversion('07:05:45PM')


//You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

function birthdayCakeCandles(candles) {
    const maxHeight = Math.max(...candles)
    return (candles.filter((candle) => candle === maxHeight)).length
}

birthdayCakeCandles([3, 2, 1, 3])