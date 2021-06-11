const getRandomInt = (min, max) => {
  if (min >= 0) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  return 'impossible, because min < 0';
};

const getMaxLength = (text, maxLength) => text.length <= maxLength;

// eslint-disable-next-line no-console
console.log(getRandomInt(1, 13));

// eslint-disable-next-line no-console
console.log(getMaxLength('test', 2));

export {getRandomInt, getMaxLength};
