import {getRandomArrayElement} from './util/get-random-array-element.js';
import {getRandomInteger} from './util/get-random-integer.js';

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

const MIN_COMMENTS = 1;
const MAX_COMMENTS = 6;

const getComment = () => ({
  id: getRandomInteger(1, 6),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const getComments = () => new Array(getRandomInteger(MIN_COMMENTS, MAX_COMMENTS)).fill(null).map(() => getComment());

export {getComments};
