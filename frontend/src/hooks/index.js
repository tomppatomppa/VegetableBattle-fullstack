import { useEffect, useState } from 'react'
import { countdown, fightHandler, isFinished } from '../utils/helpers'
import fighterService from '../services/fighters'

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
        //fix this
        const winner =
          player1.Health > player2.Health ? player1.Name : player2.Name
        const loser =
          player1.Health > player2.Health ? player2.Name : player1.Name
        fighterService
          .updateStats({ name: winner, wins: true })
          .then((response) => {
            console.log(response.data)
          })
        fighterService
          .updateStats({ name: loser, wins: false })
          .then((response) => {
            console.log(response.data)
          })
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
