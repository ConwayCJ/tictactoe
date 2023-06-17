import React from 'react'
import styles from '../styles/GameOptions.module.css'
import { Button, Slider, Typography } from '@mui/material'
import { fontFamily, fontSize } from '@mui/system'


export default function GameOptions({ options, handleGameState, handleBoardSize }) {



  return (
    <div className={styles.optionsWrapper}>

      <div className={styles.h1Container}>
        <h1>Welcome to Tic-Tac-Do I really want to play a grid this large...?</h1>
      </div>

      <form className={styles.optionsForm}>
        <Typography color="inherit" sx={{ fontSize: 18 }}>Game Board Size: {options.boardSize}</Typography>

        <Slider onChange={(e) => handleBoardSize(e)} value={options.boardSize} min={3} max={100} />
        <Button onClick={(e) => handleGameState(e)} variant="outlined" color="inherit" size="large" sx={{ mt: 5, fontSize: 18 }}>START GAME?</Button>
      </form>

    </div>
  )
}
