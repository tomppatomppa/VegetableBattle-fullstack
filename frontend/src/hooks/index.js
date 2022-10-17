import { useEffect, useState } from 'react'
import { countdown, fightHandler, isFinished } from '../utils/helpers'

export const useGameState = () => {
  const [isOn, setIsOn] = useState(false)
  const [player1, setPlayer1] = useState(null)
  const [player2, setPlayer2] = useState(null)
  const [startDate, setStartDate] = useState(null)
  /*
  # check if game ended 
  # 
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
    countdown(3, setIsOn, setStartDate)
  }
  const reset = () => {
    setPlayer1(null)
    setPlayer2(null)
    setIsOn(false)
  }
  const addPlayer = (player) => {
    if (!player1) {
      setPlayer1(player)
    } else {
      setPlayer2(player)
    }
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
    player2,
    handleStart,
    reset,
    player1Handler,
    player2Handler,
    startDate,
    addPlayer,
  }
}
