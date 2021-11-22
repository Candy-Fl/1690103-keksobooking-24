// Устанавливаем валидность для заголовка
const formTitle = document.querySelector('#title');
const MIN_LENGTH = 30;
const MAX_LENGTH = 100;
const MAX_PRICE = 1000000;
const roomsCapacities = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0],
};
const typePrice = {
  bungalow : 0,
  flat : 1000,
  hotel : 3000,
  house : 5000,
  palace : 10000,
};
formTitle.addEventListener('input',() => {
  const valueLength = formTitle.value.length;
  formTitle.addEventListener('invalid',() => {
    if (valueLength<MIN_LENGTH) {
      formTitle.setCustomValidity(`Нужно ещё ${MIN_LENGTH-valueLength} симв.`);
    }
    else if (valueLength>MAX_LENGTH) {
      formTitle.setCustomValidity(`Удалите лишние ${valueLength-MAX_LENGTH} симв.`);
    }
    else {
      formTitle.setCustomValidity('');
    }
  });
  formTitle.reportValidity();
});

// Устанавливаем валидность для цены за ночь

const formPrice = document.querySelector('#price');
formPrice.addEventListener('input',() => {
  const priceValue = formPrice.value;
  formPrice.addEventListener('input',() => {
    if (priceValue>MAX_PRICE) {
      formPrice.setCustomValidity(`Максимальная цена должна быть меньше на ${priceValue-MAX_PRICE}`);
    }
  });
  formPrice.reportValidity();
});

// Устанавливаем валидность для количества комнат и гостей
const formCapacity = document.querySelector('#capacity');
const formRoomNumber = document.querySelector('#room_number');

const onRoomsChange = () => {
  const roomNumber = formRoomNumber.value;
  const capacityNumber = parseInt(formCapacity.value,10);
  if (!(roomsCapacities[roomNumber].includes(capacityNumber))) {
    formCapacity.setCustomValidity('Количество гостей больше чем комнат');
  }
  else {
    (formCapacity.setCustomValidity(''));
  }
};
formCapacity.addEventListener('input',() => {
  onRoomsChange();
  formCapacity.reportValidity();
});

formRoomNumber.addEventListener('input', () => {
  onRoomsChange();
  formCapacity.reportValidity();
});

// Устанавливаем валидность для поля "Тип жилья" и "Цена за ночь"
const formHouseType = document.querySelector('#type');
const formHousePrice = document.querySelector('#price');


const changeType = () => {
  if (parseInt((formHousePrice.value),10) < (typePrice[formHouseType.value])) {
    formHousePrice.setCustomValidity(`Цена должна быть не меньше ${typePrice[formHouseType.value]}`);
  }
  else {
    formHousePrice.setCustomValidity('');
  }
};

formHousePrice.addEventListener('input', () => {
  changeType();
  formHousePrice.reportValidity();
});

const setPlaceHolder = () => {
  formHousePrice.placeholder = typePrice[formHouseType.value];
  formHouseType.reportValidity();
};

formHouseType.addEventListener('input', () => {
  changeType();
  setPlaceHolder();
  formHouseType.reportValidity();
});

// Устанваливаем валидность для времени заезда и выезда

const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');

timeIn.addEventListener('input', () => {
  timeOut.value = timeIn.value;
});

timeOut.addEventListener('input', () => {
  timeIn.value = timeOut.value;
});


export{setPlaceHolder};
