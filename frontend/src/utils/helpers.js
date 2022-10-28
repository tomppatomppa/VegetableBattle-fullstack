export const calculateStats = ({
  name,
  energyKcal,
  carbohydrate,
  protein,
  fat,
}) => {
  const parse = (number) => {
    return parseFloat(number).toFixed(1);
  };
  const stats = {
    Name: name.fi,
    Health: energyKcal.toFixed(),
    Attack: parse(carbohydrate),
    Defence: parse(protein),
    Delay: parse(fat + carbohydrate + protein),
    NameEN: name.en,
  };
  return stats;
};

export const attack = (power, defence) => {
  const ran = Math.floor(Math.random() * power) + power / 2;
  const damage = ((ran * 3) / 2).toFixed(0) - (defence * 3).toFixed(0);
  return damage > 0 ? damage.toFixed(0) : 1;
};

export const isFinished = (player1, player2) => {
  if (player1.Health <= 0 || player2.Health <= 0) {
    return true;
  }
  return false;
};

export const msToTime = (milliseconds) => {
  const pad = (n, z) => {
    z = z || 2;
    return ('00' + n).slice(-z);
  };
  let ms = milliseconds % 1000;
  milliseconds = (milliseconds - ms) / 1000;
  let secs = milliseconds % 60;
  milliseconds = (milliseconds - secs) / 60;
  let mins = milliseconds % 60;
  //let hrs = (milliseconds - mins) / 60
  return pad(mins) + ':' + pad(secs) + ':' + pad(ms, 2);
};

export const countdown = (count, triggerStart, setStartDate) => {
  let timeLeft = count + 1;
  let timer = setInterval(() => {
    if (timeLeft <= 1) {
      clearInterval(timer);
      triggerStart(true);
      setStartDate(Date.now());
    } else {
      timeLeft--;
      console.log(timeLeft);
      return timeLeft;
    }
  }, 1000);
};

export function filterArray(array) {
  const filtered = array.filter(
    (veg) =>
      veg.functionClass.abbreviation.fi === 'Tuoreet kasvikset' &&
      veg.type.abbreviation.fi === 'Raaka-aine'
  );
  return filtered;
}
