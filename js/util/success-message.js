import { isEscEvent } from './is-esc-event.js';
import { onUploadImageEscKeydown } from '../upload-image-form.js';

const successPopup = document.querySelector('#success').content.querySelector('.success');
const successButton = successPopup.querySelector('.success__button');

const closeSuccessPopup = () => {
  successPopup.classList.add('hidden');
};

const onCloseSuccessEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeSuccessPopup();
    document.removeEventListener('keydown', onCloseSuccessEscKeydown);
  }
};

const showSuccessMessage = () => {
  document.body.appendChild(successPopup);
  successPopup.classList.remove('hidden');
  document.addEventListener('keydown', onCloseSuccessEscKeydown);
  document.addEventListener('click', (e) => {
    const target = e.target;
    if (target === successPopup) {
      successPopup.classList.add('hidden');
      document.removeEventListener('keydown', onCloseSuccessEscKeydown);
      document.removeEventListener('keydown', onUploadImageEscKeydown);
    }
  });
};

successButton.addEventListener('click', () => {
  closeSuccessPopup();
  document.removeEventListener('keydown', onCloseSuccessEscKeydown);
  document.removeEventListener('keydown', onUploadImageEscKeydown);
});

export {showSuccessMessage};
