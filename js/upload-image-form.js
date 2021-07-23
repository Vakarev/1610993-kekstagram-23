import { isEscEvent } from './util/is-esc-event.js';
import { hashTagField } from './form-hashtags-validation.js';
import { commentsInput } from './form-comments-validation.js';
import { sendData } from './api.js';
import {showFailMessage} from './util/fail-message.js';
import { uploudedImage, scaleField, effectSlider } from './adding-effects.js';

const uploadImageInput = document.querySelector('.img-upload__input');
const uploadImageOverlay =  document.querySelector('.img-upload__overlay');
const uploadImageCloseButton = document.querySelector('.img-upload__cancel');
const uploadImageForm = document.querySelector('.img-upload__form');
const originalFilter = document.querySelector('#effect-none');

const openUploadImageForm = () => {
  uploadImageOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  originalFilter.click();
};

const closeUploadImageForm = () => {
  uploadImageOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadImageInput.value = null;
  hashTagField.value = null;
  commentsInput.value = null;
  uploudedImage.style.transform = 'none';
  effectSlider.setAttribute('style', 'display: none;');
  effectSlider.noUiSlider.updateOptions({
    start: 100,
  });
  scaleField.value = '100%';
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

hashTagField.addEventListener('focus', ()=> {
  document.removeEventListener('keydown', onUploadImageEscKeydown);
});

hashTagField.addEventListener('blur', ()=> {
  document.addEventListener('keydown', onUploadImageEscKeydown);
});

commentsInput.addEventListener('focus', ()=> {
  document.removeEventListener('keydown', onUploadImageEscKeydown);
});

commentsInput.addEventListener('blur', ()=> {
  document.addEventListener('keydown', onUploadImageEscKeydown);
});


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

setUserFormSubmit(closeUploadImageForm);

export {closeUploadImageForm, onUploadImageEscKeydown};
