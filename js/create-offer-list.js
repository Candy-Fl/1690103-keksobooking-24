import { createOffer } from './create-offer.js';

// Создаём массив из 10 объектов
const sameOfferList=Array.from({length:10},createOffer);

export {sameOfferList};