function getRandomInt(min, max) {
  if (min >= 0){
    return Math.floor(Math.random() * (max - min)) + min;
  }

  return 'impossible, because min < 0';
}

function getMaxLength(text, maxLength) {
  if (text.length <= maxLength) {
    return true;
  }

  return false;
}
