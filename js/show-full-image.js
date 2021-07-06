import {isEscEvent} from './util/is-esc-event.js';

const fullSizeImage = document.querySelector('.big-picture');
const imageComments = fullSizeImage.querySelector('.social__comments');
const bigImage = fullSizeImage.querySelector('.big-picture__img');
const likesCount = fullSizeImage.querySelector('.likes-count');
const commentsCount = fullSizeImage.querySelector('.comments-count');
const socialCaption = fullSizeImage.querySelector('.social__caption');
const closeFullImageButton = fullSizeImage.querySelector('.big-picture__cancel');
const socialCommentsCount = fullSizeImage.querySelector('.social__comment-count');
const commentsLoaderButton = fullSizeImage.querySelector('.social__comments-loader');

const getImageComments = (comments) => {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < comments.length; i++) {
    const newComment = document.createElement('li');
    newComment.classList.add('social__comment');
    newComment.innerHTML = `<img class="social__picture" src="${comments[i].avatar}" alt="${comments[i].name}" width="35" height="35"><p class="social__text">${comments[i].message}</p>`;
    fragment.appendChild(newComment);
  }

  return fragment;
};

const closeFullImage = () => {
  fullSizeImage.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const onFullImageEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeFullImage();
    document.removeEventListener('keydown', onFullImageEscKeydown);
  }
};

const showFullSizeImage = (photo) => {
  bigImage.children[0].src = photo.url;
  likesCount.textContent = photo.likes;
  commentsCount.textContent = photo.comments.length;
  socialCaption.textContent = photo.description;

  imageComments.innerHTML = '';
  imageComments.appendChild(getImageComments(photo.comments));

  fullSizeImage.classList.remove('hidden');
  document.body.classList.add('modal-open');
  socialCommentsCount.classList.add('hidden');
  commentsLoaderButton.classList.add('hidden');

  document.addEventListener('keydown', onFullImageEscKeydown);
};

closeFullImageButton.addEventListener('click', () => {
  closeFullImage();
  document.addEventListener('keydown', onFullImageEscKeydown);
});

export {showFullSizeImage};
