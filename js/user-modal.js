import { clearForm } from './form-validity.js';
const bodyElement = document.querySelector('body');
const onSuccessSubmit = () => {
  const successModal = document.querySelector('#success').content.querySelector('.success');
  const modalElement = successModal.cloneNode(true);
  bodyElement.appendChild(modalElement);
  bodyElement.addEventListener('click', () => {
    bodyElement.removeChild(modalElement);
  }, {once:true});
  bodyElement.addEventListener('keydown', (evt) => {
    if (evt.key ==='Escape') {
      bodyElement.removeChild(modalElement);
    }
  } ,{once:true});
};

export {onSuccessSubmit};

const onFailSubmit = () => {
  const failModal = document.querySelector('#error').content.querySelector('.error');
  const closeButton = failModal.querySelector('.error__button');
  const modalElement = failModal.cloneNode(true);
  bodyElement.appendChild(modalElement);
  bodyElement.addEventListener('click', () => {
    bodyElement.removeChild(modalElement);
  }, {once: true});
  bodyElement.addEventListener('keydown', (evt) => {
    if (evt.key ==='Escape') {
      bodyElement.removeChild(modalElement);
    }
  } ,{once:true});
  closeButton.addEventListener('click',() => {
    bodyElement.removeChild(modalElement);
  }, {once: true});
};

export{onFailSubmit};

const resetButton = document.querySelector('.ad-form__reset');
resetButton.addEventListener('click',() => {
  clearForm();
});
