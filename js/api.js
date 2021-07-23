import { renderPhotos } from './show-images.js';
import { showFailMessage } from './util/fail-message.js';
import { showSuccessMessage } from './util/success-message.js';
import {closeUploadImageForm} from './upload-image-form.js';
import { renderPhotoFilter } from './filter-images.js';

const serverError = document.querySelector('.server-error');

fetch('https://23.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((photos) => {
    renderPhotos(photos);
    renderPhotoFilter(photos);
  })
  .catch(() => {
    serverError.classList.remove('hidden');
  });

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://23.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
        showSuccessMessage();
      } else {
        closeUploadImageForm();
        showFailMessage();
      }
    })
    .catch(() => {
      closeUploadImageForm();
      showFailMessage();
    });
};

export {sendData};
