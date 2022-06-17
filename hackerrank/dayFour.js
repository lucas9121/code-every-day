//Complete the countApplesAndOranges function in the editor below. It should print the number of apples and oranges that land on Sam's house, each on a separate line.
//countApplesAndOranges has the following parameter(s):
// s: integer, starting point of Sam's house location.
// t: integer, ending location of Sam's house location.
// a: integer, location of the Apple tree.
// b: integer, location of the Orange tree.
// apples: integer array, distances at which each apple falls from the tree.
// oranges: integer array, distances at which each orange falls from the tree.

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    const myApples = []
    const myOranges = []
    apples.forEach((apple) => {
        apple += a
        if(apple >= s && apple <= t) myApples.push(apple)
    })
    oranges.forEach((orange) => {
        orange += b
        if(orange >= s && orange <= t) myOranges.push(orange)
    })
    console.log(myApples.length + '\n' + myOranges.length)
}

//You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).
// The first kangaroo starts at location  and moves at a rate of  meters per jump.
// The second kangaroo starts at location  and moves at a rate of  meters per jump.
// You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.

function kangaroo(x1, v1, x2, v2) {
    // if(x1 > x2 && v1 < v2 || x1 < x2 && v1 > v2) return "YES"
    // if(x1 === x2 && v1 === v2) return "YES"
    for (let i = 0; i < 10000; i++){
        x1 += v1
        console.log(`x1 is ${x1}`)
        x2 += v2
        console.log(`x2 is ${x2}`)
        if(x1 === x2) return "YES"
    }
    return "NO"
}

kangaroo(0, 3, 4, 2)