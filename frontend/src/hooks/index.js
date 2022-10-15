import { useState } from 'react'
import { fightHandler, isFinished } from '../utils/helpers'

export const useGameState = () => {
  const [turn, setTurn] = useState(1)
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
  const handleFinish = () => {
    console.log('game ended')
    //reset()
  }
  const reset = () => {
    setIsOn(false)
    setPlayer1(null)
    setPlayer2(null)
  }
  const fight = () => {
    if (turn % 2 == 0) {
      setPlayer2(fightHandler(player1, player2))
    } else {
      setPlayer1(fightHandler(player2, player1))
    }
    if (isFinished(player1, player2)) {
      handleFinish()
    }

    setTurn(turn + 1)
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
    fight,
  }
}
