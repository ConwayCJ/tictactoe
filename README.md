# Resizeable Tic-Tac-Toe
### TypeScript | React | Vite
Tic-tac-toe with a twist: having the ability to resize the grid to larger sizes. While I don't think anybody would realistically want to play on a 20x20 grid - it was an enjoyable challenge to see how I would handle the different win conditions if it was bigger than 3x3.

## Usage

Use the slider to re-size the grid.
Maximum size set to 20 so your browser doesn't break from running out of memory.
#### It didn't like when I had it set to 2 million max 😂

## Most notable code block:

Previous issue: I had a 2 dimensional array for a game board - but there was an issue when checking for wins because every div created had the same reference in memory.

How this solved that issue: Created a new reference in memory for every row/column item inside of the game board.

```javascript
  const [gameBoard, setGameBoard] = useState(makeArray(options.boardSize))

  function makeArray(size) {
    function newArray(size) {
      return new Array(size).fill(null)
    }
    return newArray(size).map(row => newArray(size))
  }
```
