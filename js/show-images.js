import {getDataSet} from './get-data-set.js';
import {showFullSizeImage} from './show-full-image.js';

const imageContainer = document.querySelector('.pictures');
const imageTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const images = getDataSet();

const getImageFragment = (data, template) => {
  const fragment = document.createDocumentFragment();
  data.forEach(({url, likes, comments, description}) => {
    const imageFragment = template.cloneNode(true);
    imageFragment.querySelector('.picture__img').src = url;
    imageFragment.querySelector('.picture__likes').textContent = likes;
    imageFragment.querySelector('.picture__comments').textContent = comments.length;
    imageFragment.addEventListener('click', (evt) => {
      evt.preventDefault();
      showFullSizeImage({url, likes, comments, description});
    });
    fragment.appendChild(imageFragment);
  });
  return fragment;
};

const getFragment = getImageFragment(images, imageTemplate);
imageContainer.appendChild(getFragment);
