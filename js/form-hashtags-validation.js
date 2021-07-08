const MIN_HASHTAG_LENGTH = 2;
const MAX_HASHTAG_LENGTH = 100;

const hashtagsInput = document.querySelector('.text__hashtags');
const hashtagsInputRe = /[^#[A-Za-zА-я0-9]{1,19}[ ]{0,1}]{0,5}$/;
const hashtagsSet = () => hashtagsInput.split(' ');

const hashtagsSetValidation = () => {
  for (let i = 0; i < hashtagsSet.length; i++) {
    hashtagsInputRe.test(hashtagsInput.value);
  }
};

hashtagsInput.addEventListener('input', () => {
  const valueLength = hashtagsInput.value.length;

  if (valueLength < MIN_HASHTAG_LENGTH) {
    hashtagsInput.setCustomValidity(`Ещё ${  MIN_HASHTAG_LENGTH - valueLength } симв.`);
  } else if (valueLength > MAX_HASHTAG_LENGTH) {
    hashtagsInput.setCustomValidity(`Удалите лишние ${  valueLength - MAX_HASHTAG_LENGTH } симв.`);
  } else if (!hashtagsSetValidation) {
    hashtagsInput.setCustomValidity('Неверное значение поля');
  } else {
    hashtagsInput.setCustomValidity('');
  }

  hashtagsInput.reportValidity();
});

export {hashtagsInput};
