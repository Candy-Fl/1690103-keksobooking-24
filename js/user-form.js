import {sendData} from './api.js';
import { showAlert } from './util.js';
import { returnMainMarker } from './map.js';
import { makeCommonMarkers } from './map.js';
import { debounce } from './utils/debounce.js';
const typesOfOfferPrice = {
  low : {
    min : 0,
    max :9999,
  },
  middle : {
    min : 10000,
    max : 49999,
  },
  high : {
    min : 50000,
  },
};
const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const mapFiltersContainer = mapFilters.querySelectorAll('.map__filter');
const disableForm = () => {
  // Отключаем все элементы в информации об объявлении
  adForm.classList.add('ad-form--disabled');
  const adFormElements=  adForm.querySelectorAll('.ad-form__element');
  (adFormElements).forEach((element) => {
    element.disabled = true;
  });
  // Так же фильтры
  mapFilters.classList.add('disabled');
  (mapFiltersContainer).forEach((element) => {
    element.disabled = true;
  });
  // Отключаем интерактивные элементы приемуществ
  mapFilters.querySelector('.map__features').disabled = true;
};

// Переводим форму в активное состояние

const activateForm = () => {
  adForm.classList.remove('ad-form--disabled');
  const adFormElements=  adForm.querySelectorAll('.ad-form__element');
  (adFormElements).forEach((element) => {
    element.disabled = false;
  });
};

const activateFilters = () => {
  mapFilters.classList.remove('disabled');
  mapFilters.querySelector('.map__features').disabled = false;
  (mapFiltersContainer).forEach((element) => {
    element.disabled = false;
  });
};


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
const clearForm = () => {
  adForm.reset();
  mapFilters.reset();
  returnMainMarker();
};

// Фильтрация объектов
const anyType = 'any';
const houseType = document.querySelector('#housing-type');

const getTypeOfHouse = (offer) => {
  if ((offer.offer.type === houseType.value) || (houseType.value === anyType)) {
    return(true);
  }
};

const housePrice = document.querySelector('#housing-price');
const getPriceOfHouse = (offer) => {
  const priceValue = housePrice.value;
  switch(priceValue) {
    case 'low' :{return offer.offer.price < typesOfOfferPrice.low.max;}
    case 'middle' : {return offer.offer.price > typesOfOfferPrice.middle.min && offer.offer.price < typesOfOfferPrice.middle.max;}
    case 'high' : {return offer.offer.price > typesOfOfferPrice.high.min;}
    case 'any' : {return true;}
  }
};

const offerRooms = document.querySelector('#housing-rooms');

const getRoomsNumber = (offer) => {
  if ((offer.offer.rooms === parseInt(offerRooms.value,10)) || (offerRooms.value === anyType)) {
    return (true);
  }
};

const offerGuests = document.querySelector('#housing-guests');

const getGuestsNumber = (offer) => {
  if ((offer.offer.guests === parseInt((offerGuests.value),10)) || (offerGuests.value === anyType)) {
    return (true);
  }
};

const offerFeatures = document.querySelectorAll('.map__checkbox');

const getOfferFeatures = (offer) => {
  const checkedFeatures = [];
  offerFeatures.forEach((offerFeature) => {
    if (offerFeature.checked) {
      checkedFeatures.push(offerFeature.value);
    }
  });
  if ((offer.offer.features) && (checkedFeatures)) {
    let featuresCount = 0;
    checkedFeatures.forEach((checked) => {
      offer.offer.features.forEach((feature) => {
        if (feature === checked) {
          featuresCount += 1;
        }
      });
    });
    if (featuresCount === checkedFeatures.length) {
      return(true);
    }
  }
};


const onFilterChange = (offers) => {
  mapFilters.addEventListener('change', debounce(() => {
    const newOffers = [];
    newOffers.push(...offers);
    const filteredOffers = newOffers.filter((offer) => getTypeOfHouse(offer) && getPriceOfHouse(offer) && getRoomsNumber(offer) && getGuestsNumber(offer) && getOfferFeatures(offer));
    makeCommonMarkers(filteredOffers);
  }));
};

export {clearForm};
export{activateForm};
export{disableForm};
export{sendUserFormSubmit};
export{onFilterChange};
export{activateFilters};

