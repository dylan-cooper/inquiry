let boards = [
  [
    [6, 0, 2, 3, 1, 1, 1, 1],
    [1, 1, 1, 0, 1, 0, 0, 0],
    [0, 1, 0, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 1, 0, 1, 0],
    [0, 1, 0, 0, 1, 0, 1, 0],
    [0, 1, 1, 0, 0, 0, 1, 0],
    [0, 0, 1, 1, 1, 1, 1, 0],
    [1, 5, 5, 0, 0, 2, 4, 4],
  ],
  [
    [1, 0, 0, 0, 1, 0, 1, 8],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [6, 0, 1, 0, 0, 0, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 0],
    [1, 0, 0, 0, 1, 0, 1, 0],
    [1, 0, 1, 0, 0, 0, 1, 0],
    [1, 0, 1, 1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0],
  ],
  [
    [1, 0, 0, 0, 1, 1, 1, 1],
    [1, 0, 1, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 1, 1, 1, 0, 1, 0],
    [0, 0, 1, 8, 1, 0, 1, 0],
    [1, 0, 1, 0, 0, 0, 1, 0],
    [1, 0, 1, 1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0],
  ],
]


export function getRandomBoard() {
  return boards[Math.floor(Math.random()*boards.length)];
}