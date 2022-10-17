import vegetableService from '../services/fighters'

export const calculateStats = ({
  name,
  energyKcal,
  carbohydrate,
  protein,
  fat,
}) => {
  const parse = (number) => {
    return parseFloat(number).toFixed(1)
  }
  const stats = {
    Name: name.fi,
    Health: energyKcal.toFixed(),
    Attack: parse(carbohydrate),
    Defence: parse(protein),
    Delay: parse(fat + carbohydrate + protein),
  }
  return stats
}

export const fightHandler = (attacker, defender, date) => {
  const deductFromHealth = attack(attacker.Attack) - defence(defender.Defence)
  let health = defender.Health - deductFromHealth.toFixed(0)
  if (deductFromHealth <= 0) {
    console.log('Avoided')
  } else {
    console.log(
      `${msToTime(Date.now() - date)} : ${attacker.Name} hits ${
        defender.Name
      } for ${deductFromHealth} damage, ${
        defender.Name
      } has ${health} health left`
    )
  }
  const updatedDefender = {
    ...defender,
    Health: health,
  }
  return updatedDefender
}

const percentage = (value, totalValue) => {
  return (100 * value) / totalValue
}
const attack = (power) => {
  const ran = Math.floor(Math.random() * power) + power / 3
  return ((ran * 3) / 2).toFixed(0)
}
const defence = (value) => {
  return (value * 3).toFixed(0)
}
export const isFinished = (player1, player2) => {
  const saveResult = async (winner, loser) => {
    console.log(`Winner is ${winner}`)
    await vegetableService.updateStats({ name: winner, wins: true })
    await vegetableService.updateStats({ name: loser, wins: false })
  }
  if (player1.Health <= 0 || player2.Health <= 0) {
    const winner = player1.Health < player2.Health ? player2.Name : player1.Name
    const loser = player1.Name === winner ? player2.Name : player1.Name

    saveResult(winner, loser)

    return true
  }
  return false
}
export const msToTime = (milliseconds) => {
  const pad = (n, z) => {
    z = z || 2
    return ('00' + n).slice(-z)
  }
  let ms = milliseconds % 1000
  milliseconds = (milliseconds - ms) / 1000
  let secs = milliseconds % 60
  milliseconds = (milliseconds - secs) / 60
  let mins = milliseconds % 60
  //let hrs = (milliseconds - mins) / 60
  return pad(mins) + ':' + pad(secs) + ':' + pad(ms, 2)
}

export const countdown = (count, triggerStart, setStartDate) => {
  let timeLeft = count + 1
  let timer = setInterval(() => {
    if (timeLeft <= 1) {
      clearInterval(timer)
      triggerStart(true)
      setStartDate(Date.now())
    } else {
      timeLeft--
      console.log(timeLeft)
      return timeLeft
    }
  }, 1000)
}
