import {getComments} from './data.js';

const bigPicture = document.querySelector('.big-picture');
const picture = document.querySelectorAll('.picture');
const commentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.social__comments-loader');
const body = document.querySelector('body');
const cancelButton = bigPicture.querySelector('.big-picture__cancel');

for (let i = 0; i <= picture.length - 1; i++) {
  picture[i].addEventListener('click', (evt) => {
    const pictureSrc = picture[i].querySelector('.picture__img').src;
    const bigPictureInner = document.querySelector('.big-picture__img');
    const bigPictureSrc = bigPictureInner.querySelector('img');
    bigPictureSrc.src = pictureSrc;

    const pictureLikes = picture[i].querySelector('.picture__likes').textContent;
    const bigPictureLikes = document.querySelector('.likes-count');
    bigPictureLikes.textContent = pictureLikes;

    const pictureComments = picture[i].querySelector('.picture__comments').textContent;
    const bigPictureComments = document.querySelector('.comments-count');
    bigPictureComments.textContent = pictureComments;

    evt.preventDefault();
    bigPicture.classList.remove('hidden');
    commentCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');
    body.classList.add('modal-open');
  });
}

cancelButton.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    bigPicture.classList.add('hidden');
  }
});

const userComment = document.querySelector('.social__comments');
const commentsTemplate = document.querySelector('#comment').content;
const createComment = getComments();
const commentsFragment = document.createDocumentFragment();

createComment.forEach(({avatar, message, name}) => {
  const commentsElement = commentsTemplate.cloneNode(true);
  commentsElement.querySelector('.social__picture').src = avatar;
  commentsElement.querySelector('.social__text').textContent = message;
  commentsElement.querySelector('.social__picture').alt = name;
  commentsFragment.appendChild(commentsElement);
});

userComment.appendChild(commentsFragment);
