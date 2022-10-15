import { useState } from 'react'

export const useGameState = () => {
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
    setIsOn(false)
    setPlayer1(null)
    setPlayer2(null)
  }
  return {
    isOn,
    setIsOn,
    player1,
    setPlayer1,
    player2,
    setPlayer2,
    handleStart,
    reset,
  }
}
