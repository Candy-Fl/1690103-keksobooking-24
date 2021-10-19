// Функция, которая выводит случайное число в диапозоне от min до max
function getSelfRandom(first, second){
  const lower = Math.ceil(Math.min(Math.abs(first), Math.abs(second)));
  const upper = Math.floor(Math.max(Math.abs(first), Math.abs(second)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

export {getSelfRandom};

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.

function getRandomPositiveFloat (first, second, digits ) {
  const lower = Math.min(Math.abs(first), Math.abs(second));
  const upper = Math.max(Math.abs(first), Math.abs(second));
  const result = Math.random() * (upper - lower) + lower;
  return parseFloat(result.toFixed(digits),10);
}

export {getRandomPositiveFloat};

// Получаем случайный элемент массива

const getRandomArrayElement = (elements) => elements[getSelfRandom(0,elements.length-1)];

export {getRandomArrayElement};


// Получаем несколько случайных элементов массива, которые не будут повторяться

const getRandomCount = (elements) => {
  const newElements = [];
  const copyElements = elements.slice(0);
  const countRandom = getSelfRandom(1,elements.length-1);
  for (let i = 1 ; i<countRandom ; i++) {
    const randomIndex = getSelfRandom(0,elements.length-i);
    newElements.push(copyElements[randomIndex]);
    copyElements.splice(randomIndex,1);
  }
  return newElements;
};

export {getRandomCount};
