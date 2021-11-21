const type = {
  palace : 'Дворец',
  flat : 'Квартира',
  bungalow : 'Бунгало',
  house : 'Дом',
  hotel : 'Отель',
};
// Объект данных
const  generateForm = (item)=> {
  // Находим копию шаблона и привязываем её к переменной cardExample
  const cardExample = document.querySelector('#card').content.querySelector('.popup');
  // Для каждого предложения мы меняем значения в соответствии с данными
  const offerElement = cardExample.cloneNode(true);
  // Меняем заголовок
  offerElement.querySelector('.popup__title').textContent = item.offer.title;
  // Меняем адресс
  offerElement.querySelector('.popup__text--address').textContent = item.offer.address;
  // Меняем цену
  offerElement.querySelector('.popup__text--price').textContent =`${item.offer.price} ₽/ночь`;
  // Меняем тип жилья
  const offerType = item.offer.type;
  offerElement.querySelector('.popup__type').textContent=type[offerType];
  // Меняем количество комнат и гостей
  offerElement.querySelector('.popup__text--capacity').textContent = `${item.offer.rooms} комнаты для ${item.offer.guests} гостей`;
  // Меняем время заезда и выезда
  offerElement.querySelector('.popup__text--time').textContent = `Заезд после ${item.offer.checkin}, выезд до ${item.offer.checkout}`;
  // Меняем приемущества
  const featuresList = offerElement.querySelector('.popup__features');
  // Удаляем все приемушества
  while (featuresList.firstChild) {
    featuresList.removeChild(featuresList.firstChild);
  }
  // Заводим новые приеущества
  if (item.offer.features) {
    item.offer.features.forEach((feature) => {
      const featuresListitem = document.createElement('li');
      featuresListitem.classList.add('popup__feature');
      featuresListitem.classList.add(`popup__feature--${feature}`);
      featuresList.appendChild(featuresListitem);
    });
  }
  else {
    const errorItem = document.createElement('p');
    errorItem.textContent = 'Приемущества отсутствуют';
    featuresList.appendChild(errorItem);
  }
  // Меняем описание объекта
  offerElement.querySelector('.popup__description').textContent = item.offer.description;
  // Меняем фото объекта
  const photoListContainer = offerElement.querySelector('.popup__photos');
  photoListContainer.removeChild(offerElement.querySelector('.popup__photo'));
  const photoList = item.offer.photos;
  if (photoList) {
    photoList.forEach((photo) => {
      const photoItem = document.createElement('img');
      photoItem.classList.add('popup__photo');
      photoItem.src = photo;
      photoItem.width = '45';
      photoItem.height = '40';
      photoItem.alt = 'Фотография жилья';
      photoListContainer.appendChild(photoItem);
    });
  }
  else {
    const errorItem = document.createElement('p');
    errorItem.textContent = 'Фотографии отсутствуют';
    photoListContainer.appendChild(errorItem);
  }
  // Меняем аватарку
  offerElement.querySelector('.popup__avatar').src = item.author.avatar;
  return (offerElement);
};


export{generateForm};
