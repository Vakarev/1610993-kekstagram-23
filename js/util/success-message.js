const successMessageTemplate = document.querySelector('#success').content;
const successMessageFragment = successMessageTemplate.cloneNode(true);
const successButton = successMessageTemplate.querySelector('.success__button');
const successContainer = successMessageTemplate.querySelector('.success');

const showSuccessMessage = () => {
  document.body.appendChild(successMessageFragment);
};

const closeSuccessPopup = () => {
  successButton.addEventListener('click', () => {
    successContainer.classList.add('hidden');
  });
};

export {showSuccessMessage, closeSuccessPopup};
