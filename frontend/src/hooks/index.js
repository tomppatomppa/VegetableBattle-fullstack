import { useEffect, useState } from 'react'
import { countdown, fightHandler, isFinished } from '../utils/helpers'
import { useDispatch } from 'react-redux'
import { updateHighscore } from '../reducers/highscoreReducer'
import { createNotification } from '../reducers/notificationReducer'
export const useGameState = () => {
  const [isOn, setIsOn] = useState(false)
  const [player1, setPlayer1] = useState(null)
  const [player2, setPlayer2] = useState(null)
  const [startDate, setStartDate] = useState(null)
  const dispatch = useDispatch()
  /*
  # check if game ended 
  # 
   */
  useEffect(() => {
    if (player1 && player2) {
      if (isFinished(player1, player2)) {
        const winner =
          player1.Health < player2.Health ? player2.Name : player1.Name
        const loser = player1.Name === winner ? player2.Name : player1.Name
        saveResult(winner, loser)
        reset()
      }
    }
  }, [player1, player2])

  const saveResult = async (winner, loser) => {
    const message = `Winner is ${winner}`
    dispatch(createNotification({ message: message, type: 'info' }, 10))
    dispatch(updateHighscore({ name: winner, wins: true }))
    dispatch(updateHighscore({ name: loser, wins: false }))
  }
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
    } else if (player.Name === player1.Name) {
      return false
    } else {
      setPlayer2(player)
    }
    return true
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
