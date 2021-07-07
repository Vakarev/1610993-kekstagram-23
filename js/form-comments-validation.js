const MIN_COMMENTS_LENGTH = 1;
const MAX_COMMENTS_LENGTH = 140;

const commentsInput = document.querySelector('.text__description');

commentsInput.addEventListener('input', () => {
  const valueLength = commentsInput.value.length;

  if (valueLength < MIN_COMMENTS_LENGTH) {
    commentsInput.setCustomValidity(`Ещё ${  MIN_COMMENTS_LENGTH - valueLength } симв.`);
  } else if (valueLength > MAX_COMMENTS_LENGTH) {
    commentsInput.setCustomValidity(`Удалите лишние ${  valueLength - MAX_COMMENTS_LENGTH } симв.`);
  } else {
    commentsInput.setCustomValidity('');
  }

  commentsInput.reportValidity();
});
