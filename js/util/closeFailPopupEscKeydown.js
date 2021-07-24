import { isEscEvent } from './is-esc-event.js';
import {closeFailPopup, onCloseFailPopupClickHandler} from './fail-message.js';

const onCloseFailEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeFailPopup();
    document.removeEventListener('keydown', onCloseFailEscKeydown);
    document.removeEventListener('click', onCloseFailPopupClickHandler);
  }
};

export {onCloseFailEscKeydown};
