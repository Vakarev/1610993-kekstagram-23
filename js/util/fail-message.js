import { onUploadImageEscKeydown } from '../upload-image-form.js';
import { onCloseFailEscKeydown } from './closeFailPopupEscKeydown.js';

const failPopup = document.querySelector('#error').content.querySelector('.error');
const failButton = failPopup.querySelector('.error__button');

const closeFailPopup = () => {
  failPopup.classList.add('hidden');
};

const onCloseFailPopupClickHandler = (e) => {
  const target = e.target;
  if (target === failPopup) {
    closeFailPopup();
    document.removeEventListener('click', onCloseFailPopupClickHandler);
    document.removeEventListener('keydown',onCloseFailEscKeydown);
    document.removeEventListener('keydown', onUploadImageEscKeydown);
  }
};

const showFailMessage = () => {
  document.body.appendChild(failPopup);
  failPopup.classList.remove('hidden');
  document.addEventListener('keydown', onCloseFailEscKeydown);
  document.addEventListener('click', onCloseFailPopupClickHandler);
};

failButton.addEventListener('click', () => {
  closeFailPopup();
  document.removeEventListener('keydown', onCloseFailEscKeydown);
  document.removeEventListener('keydown', onUploadImageEscKeydown);
  document.removeEventListener('click', onCloseFailPopupClickHandler);
});

export {showFailMessage, closeFailPopup, onCloseFailPopupClickHandler};

