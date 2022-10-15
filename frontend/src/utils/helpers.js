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

export const fightHandler = (attacker, defender) => {
  const deduct = attack(attacker.Attack)

  const health = defender.Health - deduct

  console.log(
    `${attacker.Name} hits ${defender.Name} for ${deduct} damage, ${defender.Name} has ${health} health left`
  )
  const updatedDefender = {
    ...defender,
    Health: health,
  }

  return updatedDefender
}

const attack = (power) => {
  const ran = Math.floor(Math.random() * power) + power / 3
  return ((ran * 1.5) / 3).toFixed(0)
}

export const isFinished = (player1, player2) => {
  if (player1.Health <= 0 || player2.Health <= 0) {
    const winner = player1.Health < player2.Health ? player2.Name : player1.Name
    console.log(`Winner is ${winner}`)

    return true
  }

  return false
}
