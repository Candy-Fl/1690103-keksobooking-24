// Функция, которая выводит случайное число в диапозоне от min до max
function getSelfRandom(first, second){
  const lower = Math.ceil(Math.min(Math.abs(first), Math.abs(second)));
  const upper = Math.floor(Math.max(Math.abs(first), Math.abs(second)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.

function getRandomPositiveFloat (first, second, digits ) {
  const lower = Math.min(Math.abs(first), Math.abs(second));
  const upper = Math.max(Math.abs(first), Math.abs(second));
  const result = Math.random() * (upper - lower) + lower;
  return parseFloat(result.toFixed(digits),10);
}

// Массив с номерами для адреса изображения автора
const AVATAR_INDEX = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
];

// Заголовок

const TITLE = [
  'К вашему вниманию, лучшее предложение, что вы видели на данный момент!',
];

// Получение рандомных координат

const getRandomLat = () => (getRandomPositiveFloat(35.65000,35.70000,3));


const getRandomLng = () => (getRandomPositiveFloat(139.70000,139.80000,4));


// Тип жилья

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

// Дата заеда

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];

// Дата выезда

const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];

// Массив приемуеств

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

// Описание квартиры

const DESCRIPTION = [
  'Как и говорилось ранее, квартира шикарна!',
];

// Фото квартиры

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

// Получаем случайный элемент массива

const getRandomArrayElement = (elements) => elements[getSelfRandom(0,elements.length-1)];

// Получаем несколько случайных элементов массива, которые не будут повторяться

const getRandomCount = (elements) => {
  let newElements = [];
  let copyElements = elements.slice(0);
  let countRandom = getSelfRandom(1,elements.length-1);
  for (let i = 1 ; i<countRandom ; i++) {
    let randomIndex = getSelfRandom(0,elements.length-i);
    newElements.push(copyElements[randomIndex]);
    copyElements.splice(randomIndex,1);
  }
  return newElements;
};

// Создаём объект , который описывает информацию об объявлении

const createOffer = () => {
  return {
    author : {
      avatar: 'img/avatars/user' + getRandomArrayElement(AVATAR_INDEX) + '.png',
    },
    location : {
      lat : getRandomLat(),
      lng : getRandomLng(),
    },
    offer : {
      title : getRandomArrayElement(TITLE),
      address: String(location.lat)+' '+String(location.lng),
      price : getSelfRandom(1,100000),
      type: getRandomArrayElement(TYPE),
      rooms : getSelfRandom(1,100000),
      guests : getSelfRandom(1,100000),
      checkin : getRandomArrayElement(CHECKIN),
      checkout : getRandomArrayElement(CHECKOUT),
      features : getRandomCount(FEATURES),
      description: getRandomArrayElement(DESCRIPTION),
      photos : getRandomArrayElement(PHOTOS),
    }
  }
}

// Создаём массив из 10 объектов
const sameOfferList=Array.from({length:10},createOffer);
