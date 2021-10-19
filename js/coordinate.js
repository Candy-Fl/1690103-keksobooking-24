import { getRandomPositiveFloat } from './util';
// Получение рандомных координат

const getRandomLat = () => (getRandomPositiveFloat(35.65000,35.70000,3));

export {getRandomLat};

const getRandomLng = () => (getRandomPositiveFloat(139.70000,139.80000,4));

export {getRandomLng};
