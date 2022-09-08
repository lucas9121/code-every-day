//You will be given a 2D array of the maze and an array of directions. Your task is to follow the directions given. If you reach the end point before all your moves have gone, you should return Finish. If you hit any walls or go outside the maze border, you should return Dead. If you find yourself still in the maze after using all the moves, you should return Lost.
//the key is  0 = Safe place to walk, 1 = Wall, 2 = Start Point, 3 = Finish Point
// 1. The Maze array will always be square i.e. N x N but its size and content will alter from test to test.
// 2. The start and finish positions will change for the final tests.
// 3. The directions array will always be in upper case and will be in the format of N = North, E = East, W = West and S = South.
// 4. If you reach the end point before all your moves have gone, you should return Finish.
// 5. If you hit any walls or go outside the maze border, you should return Dead.
// 6. If you find yourself still in the maze after using all the moves, you should return Lost.

const maze = [
    [1,1,1,1,1,1,1],
    [1,0,0,0,0,0,3],
    [1,0,1,0,1,0,1],
    [0,0,1,0,0,0,1],
    [1,0,1,0,1,0,1],
    [1,0,0,0,0,0,1],
    [1,2,1,0,1,0,1]
]

function mazeRunner(maze, directions) {
    let ver
    let hor
    let length = maze.length
    for (let i = 0; i < length; i++){
      for(let j = 0; j < maze[i].length; j++){
        if(maze[i][j] === 2){
          ver = i
          hor = j
        }
      }
    }
  
    for(let dir of directions){
      if(dir === "N"){
        ver--
      } else if (dir === "S"){
        ver++
      } else if (dir === "E"){
        hor++
      }  else if (dir === "W"){
        hor--
      }
      if(ver >= length || hor >= length) return "Dead"
      if(ver < 0 || hor < 0) return "Dead"
      if(maze[ver][hor] === 1) return "Dead"
      if(maze[ver][hor] === 3) return "Finish"
    }
    return "Lost"
  }

  mazeRunner(maze,["N","N","N","N","N","E","E","E","E","E"])