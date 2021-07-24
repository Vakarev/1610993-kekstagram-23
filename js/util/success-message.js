import { onUploadImageEscKeydown } from '../upload-image-form.js';
import { onCloseSuccessEscKeydown } from './closeSuccessPopupEscKeydown.js';

const successPopup = document.querySelector('#success').content.querySelector('.success');
const successButton = successPopup.querySelector('.success__button');

const closeSuccessPopup = () => {
  successPopup.classList.add('hidden');
};

const onCloseSuccessPopupClickHandler = (e) => {
  const target = e.target;
  if (target === successPopup) {
    closeSuccessPopup();
    document.removeEventListener('click', onCloseSuccessPopupClickHandler);
    document.removeEventListener('keydown', onCloseSuccessEscKeydown);
    document.removeEventListener('keydown', onUploadImageEscKeydown);
  }
};

const showSuccessMessage = () => {
  document.body.appendChild(successPopup);
  successPopup.classList.remove('hidden');
  document.addEventListener('keydown', onCloseSuccessEscKeydown);
  document.addEventListener('click', onCloseSuccessPopupClickHandler);
};

successButton.addEventListener('click', () => {
  closeSuccessPopup();
  document.removeEventListener('keydown', onCloseSuccessEscKeydown);
  document.removeEventListener('keydown', onUploadImageEscKeydown);
  document.removeEventListener('click', onCloseSuccessPopupClickHandler);
});

export {showSuccessMessage, closeSuccessPopup, onCloseSuccessPopupClickHandler};
