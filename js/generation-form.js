import { sameOfferList } from './create-offer-list.js';
const type = {
  palace : 'Дворец',
  flat : 'Квартира',
  bungalow : 'Бунгало',
  house : 'Дом',
  hotel : 'Отель',
};
// Объект данных
const offerList = document.querySelector('#map-canvas');
const  generate = ()=> {
  // Находим копию шаблона и привязываем её к переменной cardExample
  const cardExample = document.querySelector('#card').content.querySelector('.popup');
  // Для каждого предложения мы меняем значения в соответствии с данными
  sameOfferList.forEach((offerItem) => {
    const offerElement = cardExample.cloneNode(true);
    // Меняем заголовок
    offerElement.querySelector('.popup__title').textContent = offerItem.offer.title;
    // Меняем адресс
    offerElement.querySelector('.popup__text--address').textContent = offerItem.offer.address;
    // Меняем цену
    offerElement.querySelector('.popup__text--price').textContent =`${offerItem.offer.price} ₽/ночь`;
    // Меняем тип жилья
    const offerType = offerItem.offer.type;
    offerElement.querySelector('.popup__type').textContent=type[offerType];
    // Меняем количество комнат и гостей
    offerElement.querySelector('.popup__text--capacity').textContent = `${offerItem.offer.rooms} комнаты для ${offerItem.offer.guests} гостей`;
    // Меняем время заезда и выезда
    offerElement.querySelector('.popup__text--time').textContent = `Заезд после ${offerItem.offer.checkin}, выезд до ${offerItem.offer.checkout}`;
    // Меняем приемущества
    const featuresList = offerElement.querySelector('.popup__features');
    // Удаляем все приемушества
    while (featuresList.firstChild) {
      featuresList.removeChild(featuresList.firstChild);
    }
    // Заводим новые приеущества
    offerItem.offer.features.forEach((feature) => {
      const featuresListItem = document.createElement('li');
      featuresListItem.classList.add('popup__feature');
      featuresListItem.classList.add(`popup__feature--${feature}`);
      featuresList.appendChild(featuresListItem);
    });
    // Меняем описание объекта
    offerElement.querySelector('.popup__description').textContent = offerItem.offer.description;
    // Меняем фото объекта
    const photoList = document.querySelector('.popup__photos');
    offerElement.querySelector('.popup__photo').remove();
    if (offerItem.offer.photos) {
      offerItem.offer.photos.forEach((photo) => {
        const photoItem = document.createElement('li');
        photoItem.classList.add('popup__photo');
        photoItem.src = photo;
        photoList.appendChild(photoItem);
      });
    }
    // Меняем аватарку
    offerElement.querySelector('.popup__avatar').src = offerItem.author.avatar;
    offerList.appendChild(offerElement);
  });
};

export{generate};
