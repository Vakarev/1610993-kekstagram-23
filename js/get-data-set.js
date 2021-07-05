import {getRandomInteger} from './util/get-random-integer.js';
import {getComments} from './get-comments.js';
import {getRandomArrayElement} from './util/get-random-array-element.js';

const DESCRIPTIONS = [
  'карбюратор',
  'инжектор',
  'икпорт',
  'блютуз',
  'дзю-до',
  'дзю-после',
  'карнавал',
];

const DATA_SET_COUNT = 12;

const getData = () => ({
  id: getRandomInteger(1, 25),
  url: `photos/${getRandomInteger(1, 25)}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: getComments(),
});

const getDataSet = () => new Array(DATA_SET_COUNT).fill(null).map(() => getData());

export {getDataSet};
