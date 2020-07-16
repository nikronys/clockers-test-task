export const getColorByTemprature = (temprature) => {
  if (temprature >= 30) {
    return '#ff8c00';
  } else if (temprature <= -10) {
    return '#00ffff';
  }

  if (temprature <= 30 && temprature >= 10) {
    const green = 140 + ((247 - 140) / 20) * (30 - temprature);

    return `rgb(255, ${green}, 0)`
  }

  if (temprature <= 10 && temprature >= -10) {
    const red = temprature * 255 / 20;
    const blue = 255 - red;

    return `rgb(${red}, 255, ${blue})`;
  }
}