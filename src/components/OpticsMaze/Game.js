let observer = null;
let board = [
  [6, 0, 2, 3, 1, 1, 1, 1],
  [1, 1, 1, 0, 1, 0, 0, 0],
  [0, 1, 0, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 1, 0, 1, 0],
  [0, 1, 0, 0, 1, 0, 1, 0],
  [0, 1, 1, 0, 0, 0, 1, 0],
  [0, 0, 1, 1, 1, 1, 1, 0],
  [1, 5, 5, 0, 0, 2, 4, 4],
];

function emitChange() {
  observer(board)
}

export function observe(o) {
  if (observer) {
    throw new Error('Multiple observers not implemented.');
  }

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
