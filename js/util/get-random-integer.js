const getRandomInteger = (min, max) => {
  if (min >= 0) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  return 'impossible';
};

export {getRandomInteger};
