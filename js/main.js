const getRandomInt = (min, max) => {
  if (min >= 0) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  return 'impossible, because min < 0';
}
console.log(getRandomInt(1, 13));

const getMaxLength = (text, maxLength) => text.length <= maxLength;
console.log(getMaxLength('test', 2));

const DESCRIPTIONS = [
  'карбюратор',
  'инжектор',
  'икпорт',
  'блютуз',
  'дзю-до',
  'дзю-после',
  'карнавал',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Артём',
  'Кирилл',
  'Дмитрий',
  'Николай',
  'Светлана',
  'Марсель',
  'Майкл',
  'Жанна',
  'Яна',
];

const SOME_DATA_COUNT = 10;

const getRandomArrayElement = (elements) => {
  return elements[getRandomInt(0, elements.length - 1)];
};

const getComment = () => {
  return {
    id: getRandomInt(1, 5000),
    avatar: 'img/avatar-' + getRandomInt(1, 6) + '.svg',
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  };
};

const getData = () => {
  return {
    id: getRandomInt(1, 25),
    url: 'photos/' + getRandomInt(1, 25) + '.jpg',
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInt(15, 200),
    comments: getComment(),
  };
};

const someData = new Array(SOME_DATA_COUNT).fill(null).map(() => getData());

console.log(someData);
