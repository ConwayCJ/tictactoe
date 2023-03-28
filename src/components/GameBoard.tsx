import Button from '@mui/material/Button'
import React, { useEffect } from 'react'
import { useState } from 'react'
import styles from '../styles/GameBoard.module.css'

export default function GameBoard({ options, handleGameState, handleChangePlayer }) {

  const [gameBoard, setGameBoard] = useState(makeArray(options.boardSize))
  const [gameWon, setGameWon] = useState(false)

  function makeArray(size) {
    function newArray(size) {
      return new Array(size).fill(null)
    }
    //this is the game board
    return newArray(size).map(row => newArray(size))
  }

  function updateGameBoard(e, rowIndex, columnIndex) {
    let updatedBoard = [...gameBoard]
    console.log(gameBoard[rowIndex][columnIndex])

    if (gameBoard[rowIndex][columnIndex] == null) {
      updatedBoard[rowIndex][columnIndex] = options.currentPlayer
      console.log(e.target)
      e.target.innerHTML = options.currentPlayer
      e.target.style.color = "white"
      setGameBoard(updatedBoard)

      if (checkDiagonalWin() || checkHorizontalWin() || checkVerticalWin()) {
        setGameWon(true)
        //handleGameState()
        return
      }
      handleChangePlayer()
    }
    else {
      alert('Invalid Cell')
    }

  }

  function checkHorizontalWin() {
    // If one of the rows returns true, do the .every() method inside
    return gameBoard.some(row => {
      //return true if every symbol on that row (horizontal) is the current player "X" \ "O"
      return row.every(symbol => symbol === options.currentPlayer)
    })
  }

  function checkVerticalWin() {
    //Maps over the first row and checks if it has an 'X \ O. 
    return gameBoard[0].map((col, index) => {
      //Then checks if every column at that index is the same as the first row.
      return gameBoard.every(row => row[index] === col && col !== null)
    }).some(res => res)
  }

  function checkDiagonalWin() {
    let diagonal1 = true
    let diagonal2 = true


    let firstCellValue = gameBoard[0][0];
    let secondCellValue = gameBoard[0][options.boardSize - 1];

    for (let i = 1; i < options.boardSize; i++) {
      if (gameBoard[i][i] !== firstCellValue || firstCellValue === null) {
        diagonal1 = false;
      }

      if (gameBoard[i][options.boardSize - 1 - i] !== secondCellValue || secondCellValue === null) {
        diagonal2 = false;
      }

      if (!diagonal1 && !diagonal2) {
        break;
      }
    }

    return diagonal1 || diagonal2;
  }


  return gameWon ? (
    <div className={styles.gameBoardWrapper}>
      <h1>Congrats {options.currentPlayer}! </h1>
      <Button sx={{ mt: 5, fontSize: 18 }} variant="contained" color="success" size="large" className={styles.resetButton} onClick={handleGameState}>Play Again?</Button>    </div >
  ) : (
    <div className={styles.gameBoardWrapper}>
      <div className={styles.gameBoard}>
        {gameBoard.map((row, rowIndex) => (
          <div className={styles.row} key={rowIndex}>
            {row.map((column, columnIndex) => (
              <div onClick={(e) => {
                updateGameBoard(e, rowIndex, columnIndex)
              }} className={styles.cell} key={columnIndex}>
                O
              </div>
            ))}
          </div >
        ))}
      </div>

      <Button variant="contained" color="error" size="large" className={styles.resetButton} onClick={handleGameState}>Reset?</Button>
    </div>

  )

}

