import {AVATAR_INDEX,TITLE,TYPE,CHECKIN,CHECKOUT,FEATURES,DESCRIPTION,PHOTOS} from './data.js';
import {getSelfRandom,getRandomArrayElement,getRandomCount } from './util.js';
import { getRandomLat, getRandomLng } from './coordinate.js';

const createOffer = () => {
  const ranLat = getRandomLat();
  const ranLng = getRandomLng();
  return({
    author : {
      avatar: `img/avatars/user${getRandomArrayElement(AVATAR_INDEX)}.png`,
    },
    location : {
      lat : ranLat,
      lng : ranLng,
    },
    offer : {
      title : getRandomArrayElement(TITLE),
      address: `${ranLat} ${ranLng}`,
      price : getSelfRandom(1,100000),
      type: getRandomArrayElement(TYPE),
      rooms : getSelfRandom(1,100000),
      guests : getSelfRandom(1,100000),
      checkin : getRandomArrayElement(CHECKIN),
      checkout : getRandomArrayElement(CHECKOUT),
      features : getRandomCount(FEATURES),
      description: getRandomArrayElement(DESCRIPTION),
      photos : getRandomCount(PHOTOS),
    },
  });
};

export {createOffer};
