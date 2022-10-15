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
  // console.log(stats)
  return stats
}
