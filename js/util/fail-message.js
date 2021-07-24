import { onUploadImageEscKeydown } from '../upload-image-form.js';
import { onCloseFailEscKeydown } from './closeFailPopupEscKeydown.js';

const failPopup = document.querySelector('#error').content.querySelector('.error');
const failButton = failPopup.querySelector('.error__button');

const closeFailPopup = () => {
  failPopup.classList.add('hidden');
};

const onCloseFailPopup = (e) => {
  const target = e.target;
  if (target === failPopup) {
    closeFailPopup();
    document.removeEventListener('click', onCloseFailPopup);
    document.removeEventListener('keydown',onCloseFailEscKeydown);
    document.removeEventListener('keydown', onUploadImageEscKeydown);
  }
};

const showFailMessage = () => {
  document.body.appendChild(failPopup);
  failPopup.classList.remove('hidden');
  document.addEventListener('keydown', onCloseFailEscKeydown);
  document.addEventListener('click', onCloseFailPopup);
};

failButton.addEventListener('click', () => {
  closeFailPopup();
  document.removeEventListener('keydown', onCloseFailEscKeydown);
  document.removeEventListener('keydown', onUploadImageEscKeydown);
  document.removeEventListener('click', onCloseFailPopup);
});

export {showFailMessage, closeFailPopup, onCloseFailPopup};

