import { getRandomBoard } from './BoardFactory'

let observer = null;
let board = getRandomBoard();
let lights = [];

function emitChange() {
  lights = [];
  observer(board)
}

export function observe(o) {
  observer = o;
  emitChange();

  return () => {
    observer = null
  };
}

export function move(fromX, fromY, toX, toY) {
  board[toX][toY] = board[fromX][fromY];
  board[fromX][fromY] = 0;
  
  emitChange();
}

export function add(type, toX, toY) {
  board[toX][toY] = type;
  emitChange();
}

export function remove(fromX, fromY) {
  board[fromX][fromY] = 0;
  emitChange();
}

function drawForLight(sourceX, sourceY, boardClone) {
  var x = sourceX;
  var y = sourceY;

  // down: 0, up: 1, right: 2, left: 3
  var direction = (boardClone[x][y] - 6) % 4;

  while (1) {
    // get next 
    switch(direction) {
      case 0: y = y + 1; break;
      case 1: y = y - 1; break;
      case 2: x = x + 1; break;
      case 3: x = x - 1; break;
    }

    console.log(x, y)
    if (x < 0 || y < 0 || x > 7 || y > 7) {
      break;
    }

    console.log(boardClone[x][y]);
    if (boardClone[x][y] == 0) {
      boardClone[x][y] += 10 + Math.floor(direction / 2);
    } else if (boardClone[x][y] == 2 && direction == 0) {
      boardClone[x][y] += 10;
      direction = 3;
    } else if (boardClone[x][y] == 2 && direction == 2) {
      boardClone[x][y] += 10;
      direction = 1;
    } else if (boardClone[x][y] == 3 && direction == 1) {
      boardClone[x][y] += 10;
      direction = 2;
    } else if (boardClone[x][y] == 3 && direction == 3) {
      boardClone[x][y] += 10;
      direction = 0;
    } else if (boardClone[x][y] == 4 && direction == 0) {
      boardClone[x][y] += 10;
      direction = 2;
    } else if (boardClone[x][y] == 4 && direction == 3) {
      boardClone[x][y] += 10;
      direction = 1;
    } else if (boardClone[x][y] == 5 && direction == 1) {
      boardClone[x][y] += 10;
      direction = 3;
    } else if (boardClone[x][y] == 5 && direction == 2) {
      boardClone[x][y] += 10;
      direction = 0;
    } else {
      break;
    }
  }
}


export function toggleLight(sourceX, sourceY) {
  var boardClone = JSON.parse(JSON.stringify(board)); 
  var x = sourceX;
  var y = sourceY;
  var found = false;

  for (var i = 0; i < lights.length && !found; i++) {
    if (lights[i].x == x && lights[i].y == y) {
      lights.splice(i, 1);
      found = true;
    }
  }

  if (!found) {
    lights.push({x, y})
  }

  for (var i = 0; i < lights.length; i++) {
    const light = lights[i];
    drawForLight(light.x, light.y, boardClone);
  }
 
  console.log(boardClone);
  observer(boardClone);
  
}

export function turnOffLights() {
  emitChange();
}
