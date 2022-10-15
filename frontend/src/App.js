import { useState } from 'react'
import './App.css'
import Game from './components/Game'
import Vegetable from './components/Vegetable'

import Vegetables from './components/Vegetables'

function App() {
  const [isOn, setIsOn] = useState(false)
  const [player1, setPlayer1] = useState(null)
  const [player2, setPlayer2] = useState(null)

  const handleStart = () => {
    if (!player1 || !player2) {
      console.log('Choose Both players')
      return
    }
    setIsOn(true)
  }
  const reset = () => {
    setPlayer1(null)
    setPlayer2(null)
  }
  return (
    <div className="App">
      Vihannes battle
      {player1 ? (
        <Vegetable data={player1} />
      ) : (
        <Vegetables select={setPlayer1} />
      )}
      {player2 ? (
        <Vegetable data={player2} />
      ) : (
        <Vegetables select={setPlayer2} />
      )}
      {isOn && <Game />}
      <button onClick={reset}>reset players</button>
      <button onClick={handleStart}>start</button>
    </div>
  )
}

export default App
