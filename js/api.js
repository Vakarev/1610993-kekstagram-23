import {getImageFragment, imageTemplate, imageContainer} from './show-images.js';
import { showFailMessage } from './util/fail-message.js';
import { showSuccessMessage } from './util/success-message.js';
import {closeUploadImageForm} from './upload-image-form.js';

fetch('https://23.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((photos) => {
    const getFragment = getImageFragment(photos, imageTemplate);
    imageContainer.appendChild(getFragment);
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
    });
};

export {sendData};
