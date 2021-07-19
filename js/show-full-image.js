import {isEscEvent} from './util/is-esc-event.js';

const fullSizeImage = document.querySelector('.big-picture');
const imageComments = fullSizeImage.querySelector('.social__comments');
const bigImage = fullSizeImage.querySelector('.big-picture__img');
const likesCount = fullSizeImage.querySelector('.likes-count');
const allCommentsCount = fullSizeImage.querySelector('.comments-count');
const socialCaption = fullSizeImage.querySelector('.social__caption');
const closeFullImageButton = fullSizeImage.querySelector('.big-picture__cancel');
const socialCommentsCount = fullSizeImage.querySelector('.all-comments-count');
const commentsLoaderButton = fullSizeImage.querySelector('.social__comments-loader');
let currentCommentsNumber;
let currentComments = [];
const LOAD_COMMENTS_NUMBER = 5;

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

const isMoreComments = (allComments, loadedComments) => {
  if (loadedComments >= allComments) {
    commentsLoaderButton.classList.add('hidden');
  }
};

const closeFullImage = () => {
  fullSizeImage.classList.add('hidden');
  document.body.classList.remove('modal-open');
  commentsLoaderButton.classList.remove('hidden');
};

const commentLoaderHandler = () => {
  imageComments.innerHTML = '';

  currentCommentsNumber += LOAD_COMMENTS_NUMBER;
  const newComments = currentComments.slice(0, currentCommentsNumber);
  imageComments.appendChild(getImageComments(newComments));

  socialCommentsCount.textContent = newComments.length;
  isMoreComments(currentComments.length, newComments.length);
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
  socialCaption.textContent = photo.description;

  allCommentsCount.textContent = photo.comments.length;
  photo.comments.length > LOAD_COMMENTS_NUMBER ? socialCommentsCount.textContent = LOAD_COMMENTS_NUMBER : socialCommentsCount.textContent = allCommentsCount.textContent;
  imageComments.innerHTML = '';

  imageComments.appendChild(getImageComments(photo.comments.slice(0, LOAD_COMMENTS_NUMBER)));
  isMoreComments(photo.comments.length, LOAD_COMMENTS_NUMBER);

  currentCommentsNumber = LOAD_COMMENTS_NUMBER;
  currentComments = photo.comments;
  commentsLoaderButton.addEventListener('click', commentLoaderHandler);

  fullSizeImage.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onFullImageEscKeydown);
};

closeFullImageButton.addEventListener('click', () => {
  closeFullImage();
  document.addEventListener('keydown', onFullImageEscKeydown);
});

export {showFullSizeImage};
