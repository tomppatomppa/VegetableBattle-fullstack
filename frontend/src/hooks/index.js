import { useEffect, useState } from 'react'
import { fightHandler, isFinished } from '../utils/helpers'

export const useGameState = () => {
  const [isOn, setIsOn] = useState(false)
  const [player1, setPlayer1] = useState(null)
  const [player2, setPlayer2] = useState(null)
  const [startDate, setStartDate] = useState(null)
  /*
  # check if game ended 
  # [player1 & player2] as dependency
   */
  useEffect(() => {
    if (player1 && player2) {
      if (isFinished(player1, player2)) {
        reset()
      }
    }
  }, [player1, player2])

  const handleStart = () => {
    if (!player1 || !player2) {
      console.log('Choose Both players')
      return
    }
    setStartDate(Date.now())
    setIsOn(true)
  }

  const reset = () => {
    setPlayer1(null)
    setPlayer2(null)
    setIsOn(false)
  }
  const player1Handler = () => {
    setPlayer2(() => fightHandler(player1, player2, startDate))
  }
  const player2Handler = () => {
    setPlayer1(() => fightHandler(player2, player1, startDate))
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
    player1Handler,
    player2Handler,
    startDate,
  }
}
