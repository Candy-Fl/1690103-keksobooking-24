import { showAlert } from './util.js';
import { onSuccessSubmit } from './user-modal.js';
import { onFailSubmit } from './user-modal.js';
const getData = (onSuccess) => {
  fetch('https://24.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((offers) => {
      onSuccess(offers);
    })
    .catch((err) => {
      showAlert(`Ошибка загрузки данных: ${err}`);
    });
};
export{getData};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://24.javascript.pages.academy/keksobook1ing',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
        onSuccessSubmit();
      } else {
        onFailSubmit();
      }
    })
    .catch(() => {
      onFailSubmit();
    });
};

export{sendData};