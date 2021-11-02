
const type = {
  palace : 'Дворец',
  flat : 'Квартира',
  bungalow : 'Бунгало',
  house : 'Дом',
  hotel : 'Отель',
};
// Объект данных
const offerList = document.querySelector('#map-canvas');
const  generateForm = (Item)=> {
  // Находим копию шаблона и привязываем её к переменной cardExample
  const cardExample = document.querySelector('#card').content.querySelector('.popup');
  // Для каждого предложения мы меняем значения в соответствии с данными
  const offerElement = cardExample.cloneNode(true);
  // Меняем заголовок
  offerElement.querySelector('.popup__title').textContent = Item.offer.title;
  // Меняем адресс
  offerElement.querySelector('.popup__text--address').textContent = Item.offer.address;
  // Меняем цену
  offerElement.querySelector('.popup__text--price').textContent =`${Item.offer.price} ₽/ночь`;
  // Меняем тип жилья
  const offerType = Item.offer.type;
  offerElement.querySelector('.popup__type').textContent=type[offerType];
  // Меняем количество комнат и гостей
  offerElement.querySelector('.popup__text--capacity').textContent = `${Item.offer.rooms} комнаты для ${Item.offer.guests} гостей`;
  // Меняем время заезда и выезда
  offerElement.querySelector('.popup__text--time').textContent = `Заезд после ${Item.offer.checkin}, выезд до ${Item.offer.checkout}`;
  // Меняем приемущества
  const featuresList = offerElement.querySelector('.popup__features');
  // Удаляем все приемушества
  while (featuresList.firstChild) {
    featuresList.removeChild(featuresList.firstChild);
  }
  // Заводим новые приеущества
  Item.offer.features.forEach((feature) => {
    const featuresListItem = document.createElement('li');
    featuresListItem.classList.add('popup__feature');
    featuresListItem.classList.add(`popup__feature--${feature}`);
    featuresList.appendChild(featuresListItem);
  });
  // Меняем описание объекта
  offerElement.querySelector('.popup__description').textContent = Item.offer.description;
  // Меняем фото объекта
  const photoListContainer = offerElement.querySelector('.popup__photos');
  photoListContainer.removeChild(offerElement.querySelector('.popup__photo'));
  const photoList = Item.offer.photos;
  if (photoList.length > 0) {
    photoList.forEach((photo) => {
      const photoItem = document.createElement('img');
      photoItem.classList.add('popup__photo');
      photoItem.src = photo;
      photoItem.width = '45';
      photoItem.height = '40';
      photoItem.alt = 'Фотография жилья1';
      photoListContainer.appendChild(photoItem);
    });
  }
  else {
    const errorItem = document.createElement('p');
    errorItem.textContent = 'Фотографии отсутствуют';
    photoListContainer.appendChild(errorItem);
  }
  // Меняем аватарку
  offerElement.querySelector('.popup__avatar').src = Item.author.avatar;
  offerList.appendChild(offerElement);
};

export{generateForm};
