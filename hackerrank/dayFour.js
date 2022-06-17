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