import {someData} from './data.js';

const userPictures = document.querySelector('.pictures');
const picturesList = userPictures.querySelector('.pictures__list');
const pictureTemplate = document.querySelector('#picture').content;
const createPicture = someData();
const picturesListFragment = document.createDocumentFragment();

createPicture.forEach(({url, likes, comments}) => {
  const picturesElement = pictureTemplate.cloneNode(true);
  picturesElement.querySelector('.picture__img').src = url;
  picturesElement.querySelector('.picture__comments').textContent = comments.length;
  picturesElement.querySelector('.picture__likes').textContent = likes;
  picturesListFragment.appendChild(picturesElement);
});

picturesList.appendChild(picturesListFragment);
