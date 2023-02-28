import React from 'react'
import styles from '../styles/GameOptions.module.css'

export default function GameOptions({ options, handleGameState, handleBoardSize }) {



  return (
    <div className={styles.optionsWrapper}>

      <div>
        <h1>Welcome to Tic-Tac-Can my computer handle a grid this big?</h1>
      </div>

      <form className={styles.optionsForm} onSubmit={(e) => handleGameState(e)}>
        <label>Game Board Size: {options.boardSize}</label>
        <input onChange={(e) => handleBoardSize(e)} value={options.boardSize} min="3" max="50" step="1" type="range"></input>
        <button>Start Game?</button>
      </form>

    </div>
  )
}
