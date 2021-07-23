const hashTagField = document.querySelector('.text__hashtags');

hashTagField.addEventListener('change', () => {
  const regex = /^#[A-Za-zА-Яа-я0-9]{1,19}$/;
  const hashTags = hashTagField.value.split(' ');
  const errorsList = [];
  const lowerCaseTags = [];

  hashTags.forEach((element) => {

    lowerCaseTags.push(element.toLowerCase());

    if(!regex.test(element)) {
      errorsList.push(element);
    } else if (element.length === 1){
      errorsList.push(element);
    }
  });

  const repeatedTegs = lowerCaseTags.filter((elm, index, array) => array.indexOf(elm) !== index);

  repeatedTegs.forEach((element) => {
    errorsList.push(element);
  });

  if(errorsList.length >= 1) {
    hashTagField.setCustomValidity('Хет-тег должен начинаться с символа #,\
            не повторяться,\
            cостоять из букв и цифр, а также иметь длину от 1 до 20 символов\
            и не может состоять из одного символа #\
            Хеш-теги не чувствительны к регистру');
  } else if(hashTags.length > 5){
    hashTagField.setCustomValidity('Максимальное колличество хеш-тегов: 5');
  } else {
    hashTagField.setCustomValidity('');
  }
});

export {hashTagField};
