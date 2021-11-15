import { activeForm } from './toggle-form.js';
import {disableForm} from './toggle-form.js';
import {sameOfferList} from './create-offer-list.js';
import {generateForm} from './generation-form.js';
disableForm();
// Создаём слой карты и интегрируем его на сайт в поле карты
const map = L.map('map-canvas')
  .on('load', () => {
    activeForm();
  })
  .setView([35.68, 139.77], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' , {
  attribution : 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
},
).addTo(map);

// Создаём главный маркер
const mainMarkerIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52,52],
  iconAnchor: [26,52],
});
const marker = L.marker(
  {
    lat :35.68,
    lng :139.77,
  },
  {
    draggable : true,
    icon : mainMarkerIcon,
  },
);
marker.addTo(map);

// Настраиваем функционал перемещения главной метки и отображения координат
const addressForm = document.querySelector('#address');
addressForm.value = `${marker._latlng.lat} ${marker._latlng.lng}`;
marker.on('moveend', (evt) => {
  const markerAdress = evt.target.getLatLng();
  // Присваиваем строке адресса значения lng и lng , округленные до 5 символов после запятой
  addressForm.value = `${markerAdress.lat.toFixed(5)} ${markerAdress.lng.toFixed(5)}`;
});

// Создаём обычные маркеры для всех объявлений
const commonMarkerIcon = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize:[40,40],
  iconAnchor:[20,40],
});
// Перебираем список предложений и на основе каждого элемента выводим маркер

sameOfferList.forEach((offer) => {
  const commonMarker = L.marker(
    {
      lat : offer.location.lat,
      lng : offer.location.lng,
    },
    {
      icon: commonMarkerIcon,
    },
  );
  commonMarker.addTo(map);
  generateForm(offer);
  commonMarker.bindPopup(generateForm(offer));
});

