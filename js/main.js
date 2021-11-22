import './form-validity.js';
import './map.js';
import { makeCommonMarkers } from './map.js';
import './api.js';
import {getData} from './api.js';
import {clearForm} from './user-form.js';
import {sendUserFormSubmit} from './user-form.js';
import { onFilterChange } from './user-form.js';
import './user-modal.js';

const localOffers = [];

getData((offers) => {
  makeCommonMarkers(offers);
  onFilterChange(offers);
  localOffers.push(...offers);
},
);

sendUserFormSubmit(() => {
  clearForm(localOffers);
});
export{localOffers};
