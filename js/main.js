import './form-validity.js';
import './map.js';
import { makeCommonMarkers } from './map.js';
import './api.js';
import {getData} from './api.js';
const SAME_OFER_LENGTH = 10;
import {clearForm} from './form-validity.js';
import {sendUserFormSubmit} from './user-form.js';
import './user-modal.js';
getData((offers) => {
  makeCommonMarkers(offers.slice(0,SAME_OFER_LENGTH));
});
sendUserFormSubmit(clearForm);
