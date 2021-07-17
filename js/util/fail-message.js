const failMessageTemplate = document.querySelector('#error').content;
const failMessageFragment = failMessageTemplate.cloneNode(true);

const showFailMessage = () => {
  document.body.appendChild(failMessageFragment);
};

export {showFailMessage};
