import {activateForm} from './user-form.js';
import {disableForm} from './user-form.js';
import {generateForm} from './generation-form.js';
import {activateFilters} from './user-form.js';
const MAIN_LNG_START = 139.75299;
const MAIN_LAT_START = 35.684405;
const SAME_OFER_LENGTH = 10;
disableForm();
// Создаём слой карты и интегрируем его на сайт в поле карты
const map = L.map('map-canvas')
  .on('load', () => {
    activateForm();
  })
  .setView([MAIN_LAT_START, MAIN_LNG_START], 13);

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
    lat :MAIN_LAT_START,
    lng :MAIN_LNG_START,
  },
  {
    draggable : true,
    icon : mainMarkerIcon,
  },
);
marker.addTo(map);

// Настраиваем функционал перемещения главной метки и отображения координат
const addressForm = document.querySelector('#address');
addressForm.value = `${MAIN_LAT_START} ${MAIN_LNG_START}`;
marker.on('moveend', (evt) => {
  const markerAdress = evt.target.getLatLng();
  // Присваиваем строке адресса значения lng и lng , округленные до 5 символов после запятой
  addressForm.value = `${markerAdress.lat.toFixed(5)} ${markerAdress.lng.toFixed(5)}`;
});

const returnMainMarker = () => {
  marker.setLatLng({
    lat: MAIN_LAT_START,
    lng: MAIN_LNG_START,
  });
  map.setView({
    lat: MAIN_LAT_START,
    lng: MAIN_LNG_START,
  });
  addressForm.value = `${MAIN_LAT_START} ${MAIN_LNG_START}`;
};

// Создаём обычные маркеры для всех объявлений
const commonMarkerIcon = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize:[40,40],
  iconAnchor:[20,40],
});

const markerGroup = L.layerGroup().addTo(map);

// Перебираем список предложений и на основе каждого элемента выводим маркер
const makeCommonMarkers = (offers) => {
  markerGroup.clearLayers();
  offers
    .slice(0,SAME_OFER_LENGTH)
    .forEach((offer) => {
      const commonMarker = L.marker(
        {
          lat : offer.location.lat,
          lng : offer.location.lng,
        },
        {
          icon: commonMarkerIcon,
        },
      );
      commonMarker.addTo(markerGroup);
      commonMarker.bindPopup(generateForm(offer));
    });
  activateFilters();
};


export{makeCommonMarkers};
export{returnMainMarker};
