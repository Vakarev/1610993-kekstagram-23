import {getRandomInt} from './util.js';

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

const SOME_DATA_COUNT = 1;

const getRandomArrayElement = (elements) => elements[getRandomInt(0, elements.length - 1)];

const getComment = () => ({
  id: getRandomInt(1, 5000),
  avatar: `img/avatar- ${getRandomInt(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const getComments = () => new Array(getRandomInt(1, 25)).fill(null).map(() => getComment());

const getData = () => ({
  id: getRandomInt(1, 25),
  url: `photos/${getRandomInt(1, 25)}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInt(15, 200),
  comments: getComments(),
});

const someData = () => new Array(SOME_DATA_COUNT).fill(null).map(() => getData());

// eslint-disable-next-line no-console
console.log(someData);

export {someData};
