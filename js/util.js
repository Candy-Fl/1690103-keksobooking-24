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


// Получаем случайный элемент массива

const getRandomArrayElement = (elements) => elements[getSelfRandom(0,elements.length-1)];


// Получаем несколько случайных элементов массива, которые не будут повторяться

const getRandomCount = (elements) => {
  const newElements = [];
  const copyElements = elements.slice(0);
  const countRandom = getSelfRandom(1,elements.length-1);
  for (let i = 0 ; i<countRandom ; i++) {
    const randomIndex = getSelfRandom(0,elements.length-i);
    newElements.push(copyElements[randomIndex]);
    copyElements.splice(randomIndex,1);
  }
  return newElements;
};

// Функция для показа ошибки загрузки данных
const ALERT_SHOW_TIME = 5000;

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.textContent = message;
  document.body.append(alertContainer);
  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};
export{showAlert};
export {getSelfRandom};
export {getRandomCount};
export {getRandomArrayElement};
export {getRandomPositiveFloat};
