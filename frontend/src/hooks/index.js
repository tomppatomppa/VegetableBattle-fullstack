import { useEffect, useState } from 'react'
import { attack, isFinished, msToTime } from '../utils/helpers'

import { useDispatch } from 'react-redux'
import { updateHighscore } from '../reducers/highscoreReducer'
import { createStatus, setStatusTo } from '../reducers/statusReducer'

import punchSound from '../assets/soundFX/hit.mp3'
import countdownSound from '../assets/soundFX/countdown.mp3'

export const useGameState = () => {
  const [isOn, setIsOn] = useState(false)
  const [player1, setPlayer1] = useState(null)
  const [player2, setPlayer2] = useState(null)
  const [startDate, setStartDate] = useState(null)
  let punch = new Audio(punchSound)
  let count = new Audio(countdownSound)

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
    dispatch(createStatus(`Winner is ${winner}`))
    dispatch(updateHighscore({ name: winner, wins: true }))
    dispatch(updateHighscore({ name: loser, wins: false }))
  }
  const handleStart = () => {
    if (!player1 || !player2) {
      console.log('Choose Both players')
      return
    }
    dispatch(setStatusTo([]))
    countdown(3, setIsOn, setStartDate)
    count.play()
  }
  const reset = () => {
    setPlayer1(null)
    setPlayer2(null)
    setStartDate(null)
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
  const fight = (attacker, defender) => {
    const hit = attack(attacker.Attack, defender.Defence)
    let health = defender.Health - hit
    const updatedPlayer = {
      ...defender,
      Health: health,
    }
    if (attacker.Name === player1.Name) {
      setPlayer2(() => updatedPlayer)
    } else {
      setPlayer1(() => updatedPlayer)
    }
    punch.play()
    statusUpdate(attacker, defender, hit, health)
  }
  const statusUpdate = (attacker, defender, hit, health) => {
    dispatch(
      createStatus(
        `${msToTime(Date.now() - startDate)} : ${attacker.Name} hits ${
          defender.Name
        } for ${hit} damage, ${defender.Name} has ${health} health left`
      )
    )
  }
  const countdown = (count) => {
    let timeLeft = count + 1
    let timer = setInterval(() => {
      if (timeLeft <= 1) {
        clearInterval(timer)
        setIsOn(true)
        setStartDate(Date.now())
      } else {
        timeLeft--
        dispatch(createStatus(timeLeft))
        return timeLeft
      }
    }, 1000)
  }
  return {
    isOn,
    setIsOn,
    player1,
    player2,
    handleStart,
    reset,
    startDate,
    addPlayer,
    fight,
  }
}
