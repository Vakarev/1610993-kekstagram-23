import { isEscEvent } from './is-esc-event.js';
import { onUploadImageEscKeydown } from '../upload-image-form.js';

const failPopup = document.querySelector('#error').content.querySelector('.error');
const failButton = failPopup.querySelector('.error__button');

const closeFailPopup = () => {
  failPopup.classList.add('hidden');
};

const onCloseFailEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeFailPopup();
    document.removeEventListener('keydown', onCloseFailEscKeydown);
  }
};

const showFailMessage = () => {
  document.body.appendChild(failPopup);
  failPopup.classList.remove('hidden');
  document.addEventListener('keydown', onCloseFailEscKeydown);
  document.addEventListener('click', (e) => {
    const target = e.target;
    if (target === failPopup) {
      failPopup.classList.add('hidden');
      document.removeEventListener('keydown', onCloseFailEscKeydown);
      document.removeEventListener('keydown', onUploadImageEscKeydown);
    }
  });
};

failButton.addEventListener('click', () => {
  closeFailPopup();
  document.removeEventListener('keydown', onCloseFailEscKeydown);
  document.removeEventListener('keydown', onUploadImageEscKeydown);
});


export {showFailMessage};

