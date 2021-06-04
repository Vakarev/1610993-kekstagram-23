const getRandomInt = (min, max) => {
  if (min >= 0) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  return 'impossible, because min < 0';
}
console.log(getRandomInt(1, 13));

const getMaxLength = (text, maxLength) => text.length <= maxLength;
console.log(getMaxLength('test', 2));
