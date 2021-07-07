import { isEscEvent } from './util/is-esc-event.js';

const uploadImageInput = document.querySelector('.img-upload__input');
const uploadImageOverlay =  document.querySelector('.img-upload__overlay');
const uploadImageCloseButton = document.querySelector('.img-upload__cancel');

const openUploadImageForm = () => {
  uploadImageOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

const closeUploadImageForm = () => {
  uploadImageOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadImageInput.value = null;
};

const onUploadImageEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeUploadImageForm();
    document.removeEventListener('keydown', onUploadImageEscKeydown);
  }
};

uploadImageInput.addEventListener('change', () => {
  openUploadImageForm();
  document.addEventListener('keydown', onUploadImageEscKeydown);
});

uploadImageCloseButton.addEventListener('click', () => {
  closeUploadImageForm();
  document.addEventListener('keydown', onUploadImageEscKeydown);
});
