import { isEscEvent } from './util/is-esc-event.js';
import { hashtagsInput } from './form-hashtags-validation.js';
import { commentsInput } from './form-comments-validation.js';
import { sendData } from './api.js';
import {showFailMessage} from './util/fail-message.js';
import { closeSuccessPopup } from './util/success-message.js';

const uploadImageInput = document.querySelector('.img-upload__input');
const uploadImageOverlay =  document.querySelector('.img-upload__overlay');
const uploadImageCloseButton = document.querySelector('.img-upload__cancel');
const uploadImageForm = document.querySelector('.img-upload__form');

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
  document.removeEventListener('keydown', onUploadImageEscKeydown);
});

hashtagsInput.onfocus = () => {
  document.removeEventListener('keydown', onUploadImageEscKeydown);
};

commentsInput.onfocus = () => {
  document.removeEventListener('keydown', onUploadImageEscKeydown);
};

const setUserFormSubmit = (onSuccess) => {
  uploadImageForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => onSuccess(),
      () => showFailMessage(),
      new FormData(evt.target),
    );
  });
};

closeSuccessPopup();

setUserFormSubmit(closeUploadImageForm);

export {closeUploadImageForm};
