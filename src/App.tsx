import { useState } from 'react'
import GameOptions from './components/GameOptions'
import GameBoard from './components/GameBoard'
import './App.css'
import Navigation from './components/Navigation'

function App() {

  const [options, setOptions] = useState({
    gameStarted: false,
    boardSize: 3,
    currentPlayer: 'X',
  })

  function handleGameState(e) {
    e.preventDefault()

    setOptions({
      ...options,
      gameStarted: !options.gameStarted,
      currentPlayer: 'X'
    })
  }

  function handleBoardSize(e) {
    e.target.value <= 0 ? options.boardSize = 3 : options.boardSize === 3,
      console.log('yes')
    setOptions({
      ...options,
      boardSize: parseInt(e.target.value)
    })
  }

  function handleChangePlayer(e) {

    setOptions({
      ...options,
      currentPlayer: options.currentPlayer === 'X' ? 'O' : 'X'
    })
  }

  return !options.gameStarted ? (
    <div>
      <Navigation />
      <GameOptions options={options} handleGameState={handleGameState} handleBoardSize={handleBoardSize} />
    </div>
  ) : (
    <div>
      <Navigation />
      <GameBoard options={options} handleGameState={handleGameState} handleChangePlayer={handleChangePlayer} />
    </div>
  )
}

export default App
