import { isEscEvent } from './is-esc-event.js';
import {closeSuccessPopup, onCloseSuccessPopupClickHandler} from './success-message.js';

const onCloseSuccessEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeSuccessPopup();
    document.removeEventListener('keydown', onCloseSuccessEscKeydown);
    document.removeEventListener('click', onCloseSuccessPopupClickHandler);
  }
};

export {onCloseSuccessEscKeydown};
