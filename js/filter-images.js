import { debounce } from './util/debounce.js';
import { renderPhotos } from './show-images.js';

const RERENDER_DELAY = 500;
const NUMBER_RANDOM_PICTURES = 10;

const picturesList = document.querySelector('.pictures');
const imgFilters = document.querySelector('.img-filters');
const imgFilterButtons = imgFilters.querySelectorAll('.img-filters__button');
const getDefaultPictures = imgFilters.querySelector('#filter-default');
const getRandomPictures = imgFilters.querySelector('#filter-random');
const getDiscussedPictures = imgFilters.querySelector('#filter-discussed');

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }
};

const setFiltersActive = (activeButton) => {
  imgFilterButtons.forEach((imgFilterButton) => {
    imgFilterButton.classList.remove('img-filters__button--active');
  });
  activeButton.classList.add('img-filters__button--active');
};

const setFilterDebounced = (debounce(
  (photoList) => {
    picturesList.querySelectorAll('.picture').forEach((picture) => {
      picture.remove();
    });
    renderPhotos(photoList);
  },
  RERENDER_DELAY,
));

const renderPhotoFilter = (userPhotos) => {
  getDefaultPictures.addEventListener('click', () => {
    setFiltersActive(getDefaultPictures);
    const defaultPictures = userPhotos.sort((a, b) => a.id > b.id ? 1 : -1);
    setFilterDebounced(defaultPictures);
  });

  getRandomPictures.addEventListener('click', () => {
    setFiltersActive(getRandomPictures);
    shuffle(userPhotos);
    const randomPictures = userPhotos.slice(0, NUMBER_RANDOM_PICTURES);
    setFilterDebounced(randomPictures);
  });

  getDiscussedPictures.addEventListener('click', () => {
    setFiltersActive(getDiscussedPictures);
    const discussedPictures = userPhotos.sort((a, b) => a.comments.length > b.comments.length ? 1 : -1);
    discussedPictures.reverse();
    setFilterDebounced(discussedPictures);
  });
};

export {renderPhotoFilter};
