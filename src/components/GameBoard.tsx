import React, { useEffect } from 'react'
import { useState } from 'react'
import styles from '../styles/GameBoard.module.css'

export default function GameBoard({ options, handleGameState, handleChangePlayer }) {

  const [gameBoard, setGameBoard] = useState(makeArray(options.boardSize))

  /**[
   * [null,null,null]
   * [null,null,null]
   * [null,null,null]
   * ]
   */

  // useEffect(() => {
  //   setGameBoard(makeArray(options.boardSize))
  // }, [])

  function makeArray(size) {
    const arr = []

    for (let i = 0; i < size; i++) {
      arr[i] = null
    }
    console.log(arr.map(a => arr))
    return arr.map(a => arr)
  }

  function updateGameBoard(e, rowIndex, columnIndex) {
    console.log(`
    row index: ${rowIndex}
    col indx: ${columnIndex}`)
    let updatedBoard = [...gameBoard]
    console.log(gameBoard[rowIndex][columnIndex])

    if (gameBoard[rowIndex][columnIndex] == null) {
      updatedBoard[rowIndex][columnIndex] = options.currentPlayer
      setGameBoard(updatedBoard)
      handleChangePlayer()
    }
    else {
      console.log('invalid cell')
    }
  }

  // function checkHorizontalWin() {
  //   gameBoard.map(row => row.every(column => column === options.currentPlayer))
  // }

  return (
    <div className={styles.gameBoardWrapper}>
      <div className={styles.gameBoard}>
        {gameBoard.map((row, rowIndex) => (
          <div className={styles.row} key={rowIndex}>
            {row.map((column, columnIndex) => (
              <>
                <div onClick={(e) => updateGameBoard(e, rowIndex, columnIndex)} className={styles.cell} key={columnIndex}>
                  {column}
                </div>
              </>
            ))}
          </div >
        ))}
      </div>

      <button className={styles.resetButton} onClick={handleGameState}>Reset?</button>
    </div>
  )
}

