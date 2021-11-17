import { getRandomPositiveFloat } from './util.js';
// Получение рандомных координат1

const getRandomLat = () => (getRandomPositiveFloat(35.65000,35.70000,3));

const getRandomLng = () => (getRandomPositiveFloat(139.70000,139.80000,4));

export {getRandomLat};
export {getRandomLng};
