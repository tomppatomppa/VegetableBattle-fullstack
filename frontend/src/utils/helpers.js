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
  const health = defender.Health - attack(attacker.Attack)
  const updatedDefender = {
    ...defender,
    Health: health - 12,
  }

  return updatedDefender
}

const attack = (power) => {
  const ran = Math.floor(Math.random() * power) + power / 3
  return ((ran * 1.5) / 3).toFixed(0)
}

export const isFinished = (player1, player2) => {
  if (player1.Health <= 0 || player2.Health <= 0) {
    return true
  }
  return false
}
