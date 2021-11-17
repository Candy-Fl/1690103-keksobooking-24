// Устанавливаем валидность для заголовка
const formTitle = document.querySelector('#title');
formTitle.addEventListener('input',() => {
  const minLength = 30;
  const maxLength = 100;
  const valueLength = formTitle.value.length;

  formTitle.addEventListener('invalid',() => {
    if (valueLength<minLength) {
      formTitle.setCustomValidity(`Нужно ещё ${minLength-valueLength} симв.`);
    }
    else if (valueLength>maxLength) {
      formTitle.setCustomValidity(`Удалите лишние ${valueLength-maxLength} симв.`);
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
  const maxPrice = 1000000;
  const priceValue = formPrice.value;

  formPrice.addEventListener('input',() => {
    if (priceValue>maxPrice) {
      formPrice.setCustomValidity(`Максимальная цена должна быть меньше на ${priceValue-maxPrice}`);
    }
  });
  formPrice.reportValidity();
});

// Устанавливаем валидность для количества комнат и гостей
const formCapacity = document.querySelector('#capacity');
const formRoomNumber = document.querySelector('#room_number');
const roomsToCapacities = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0],
};
const onRoomsChange = () => {
  const roomNumber = formRoomNumber.value;
  const capacityNumber = parseInt(formCapacity.value,10);
  if (!(roomsToCapacities[roomNumber].includes(capacityNumber))) {
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

// Устанавливаем валидность для поля "Тип жилья" и "Цена за ночь"
const formHouseType = document.querySelector('#type');
const formHousePrice = document.querySelector('#price');
const typeToPrice = {
  bungalow : [0],
  flat : [1000],
  hotel : [3000],
  house : [5000],
  palace : [10000],
};

const onTypeChange = () => {
  if (formHousePrice.value<typeToPrice[formHouseType.value]) {
    formHousePrice.setCustomValidity(`Цена должна быть не меньше ${typeToPrice[formHouseType.value]}`);
  }
  else {
    formHousePrice.setCustomValidity('');
  }
};

formHousePrice.addEventListener('input', () => {
  onTypeChange();
  formHousePrice.reportValidity();
});

formHouseType.addEventListener('input', () => {
  onTypeChange();
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

