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
