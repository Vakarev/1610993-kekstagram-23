const newFilePopup = document.querySelector('.img-upload__overlay');
const effectSlider = document.querySelector('.effect-level__slider');
const uploudedImageContainer = document.querySelector('.img-upload__preview');
const uploudedImage = uploudedImageContainer.querySelector('img');
const effectLevelValue = document.querySelector('.effect-level__value');
const scaleField = document.querySelector('.scale__control--value');
const effectsList = newFilePopup.querySelectorAll('.effects__radio');
const scaleControl = newFilePopup.querySelector('.img-upload__scale');

noUiSlider.create(effectSlider, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

const getSliderOptions = (minValue, maxValue, stepValue) => {

  effectSlider.noUiSlider.updateOptions({
    range: {
      min: minValue,
      max: maxValue,
    },
    start: maxValue,
    step: stepValue,
    format: {
      to: (value) => {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: (value) => parseFloat(value),
    },
  });
};

const addEffects = (evt) => {
  const targetElementValue  = evt.target.value;
  let styleFilter;

  if (uploudedImage.classList.length === 2) {
    uploudedImage.className = 'img-upload__preview';
  }

  uploudedImage.classList.add(`effects__preview--${targetElementValue}`);

  if(targetElementValue === 'none') {
    effectSlider.setAttribute('style', 'display: none;');
    uploudedImage.style.filter = 'none';
    return;
  } else {
    effectSlider.setAttribute('style', 'display: block;');
  }

  switch (targetElementValue) {
    case 'chrome':
      styleFilter = 'grayscale';
      getSliderOptions(0, 1, 0.1);
      break;
    case 'sepia':
      styleFilter = 'sepia';
      getSliderOptions(0, 1, 0.1);
      break;
    case 'marvin':
      styleFilter = 'invert';
      getSliderOptions(0, 100, 1);
      break;
    case 'phobos':
      styleFilter = 'blur';
      getSliderOptions(0, 3, 0.1);
      break;
    case 'heat':
      styleFilter = 'brightness';
      getSliderOptions(1, 3, 0.1);
      break;
    case 'none':
      break;
  }

  effectSlider.noUiSlider.on('update', (_, handle, unencoded) => {

    if(Number.isInteger(unencoded[handle])) {
      effectLevelValue.value = unencoded[handle].toFixed(0);
    } else {
      effectLevelValue.value = unencoded[handle].toFixed(1);
    }

    if (targetElementValue === 'marvin') {
      return uploudedImage.style.filter = `${styleFilter}(${effectLevelValue.value}%)`;
    } else if (targetElementValue === 'phobos') {
      return uploudedImage.style.filter = `${styleFilter}(${effectLevelValue.value}px)`;
    }
    uploudedImage.style.filter = `${styleFilter}(${effectLevelValue.value})`;
  });
};

const getImageScale = (evt) => {

  const buttonSmaller = document.querySelector('.scale__control--smaller');
  const buttonBigger = document.querySelector('.scale__control--bigger');

  const getReduceImage = () => {

    switch (scaleField.value) {
      case '100%':
        uploudedImage.style.transform = 'scale(0.75)';
        buttonBigger.removeAttribute('disabled', 'disabled');
        scaleField.value = '75%';
        break;
      case '75%':
        uploudedImage.style.transform = 'scale(0.5)';
        scaleField.value = '50%';
        break;
      case '50%':
        uploudedImage.style.transform = 'scale(0.25)';
        buttonSmaller.setAttribute('disabled', 'disabled');
        scaleField.value = '25%';
        break;
    }
  };

  const getLargeImage = () => {

    switch (scaleField.value) {
      case '75%':
        uploudedImage.style.transform = 'scale(1)';
        buttonBigger.setAttribute('disabled', 'disabled');
        scaleField.value = '100%';
        break;
      case '50%':
        uploudedImage.style.transform = 'scale(0.75)';
        scaleField.value = '75%';
        break;
      case '25%':
        uploudedImage.style.transform = 'scale(0.5)';
        buttonSmaller.removeAttribute('disabled');
        scaleField.value = '50%';
        break;
    }
  };

  if(evt.target.textContent === 'Уменьшить') {
    return getReduceImage();
  }
  getLargeImage();
};

scaleControl.addEventListener('click', getImageScale);

for(let counter = 0 ; counter <= effectsList.length - 1 ; counter++) {
  effectsList[counter].addEventListener('click', addEffects);
}

export {uploudedImage, scaleField, effectSlider};
