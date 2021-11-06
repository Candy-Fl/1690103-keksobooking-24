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
};
formCapacity.addEventListener('input',() => {
  onRoomsChange();
  formCapacity.reportValidity();
});