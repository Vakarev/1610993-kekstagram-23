import {someData} from './data.js';

const userPictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content;
const createPicture = someData();
const picturesFragment = document.createDocumentFragment();
const userComment = document.querySelector('.social__comments');
const commentsTemplate = document.querySelector('#comment').content;
const commentsFragment = document.createDocumentFragment();

createPicture.forEach(({url, likes, comments}) => {
  const picturesElement = pictureTemplate.cloneNode(true);
  picturesElement.querySelector('.picture__img').src = url;
  picturesElement.querySelector('.picture__comments').textContent = comments.length;
  picturesElement.querySelector('.picture__likes').textContent = likes;
  picturesFragment.appendChild(picturesElement);

  comments.forEach(({avatar, message, name}) => {
    const commentsElement = commentsTemplate.cloneNode(true);
    commentsElement.querySelector('.social__picture').src = avatar;
    commentsElement.querySelector('.social__text').textContent = message;
    commentsElement.querySelector('.social__picture').alt = name;
    commentsFragment.appendChild(commentsElement);
  });
});

userPictures.appendChild(picturesFragment);
userComment.appendChild(commentsFragment);
