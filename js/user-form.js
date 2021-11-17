import {sendData} from './api.js';
import { showAlert } from './util.js';
const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const disableForm = () => {
  // Отключаем все элементы в информации об объявлении
  adForm.classList.add('ad-form--disabled');
  const adFormElements=  adForm.querySelectorAll('.ad-form__element');
  (adFormElements).forEach((element) => {
    element.classList.add('.disabled');
  });
  // Так же фильтры
  mapFilters.classList.add('map__filters--disabled');
  const mapFiltersContainer = mapFilters.querySelectorAll('.map__filter');
  (mapFiltersContainer).forEach((element) => {
    element.classList.add('.disabled');
  });
  // Отключаем интерактивные элементы приемуществ
  mapFilters.querySelector('.map__features').classList.add('disabled');
};

export{disableForm};

// Переводим форму в активное состояние

const activeForm = () => {
  adForm.classList.remove('ad-form--disabled');
  const adFormElements=  adForm.querySelectorAll('.ad-form__element');
  (adFormElements).forEach((element) => {
    element.classList.remove('.disabled');
  });
  mapFilters.classList.remove('map__filters--disabled');
  const mapFiltersContainer = mapFilters.querySelectorAll('.map__filter');
  (mapFiltersContainer).forEach((element) => {
    element.classList.remove('.disabled');
  });
  mapFilters.querySelector('.map__features').classList.remove('disabled');
};

export{activeForm};

const sendUserFormSubmit = (onSuccess) => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => onSuccess(),
      () => showAlert('Ошибка при отправке формы. Повторите попытку'),
      new FormData(evt.target),
    );
  });
};
export{sendUserFormSubmit};
