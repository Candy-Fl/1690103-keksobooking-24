// Функция, которая выводит случайное число в диапозоне от min до max
function selfRandom(min, max){
  if (max>min) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
  }
  throw new Error ('min должно быть больше max');
}
selfRandom(1,20);

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.

function coordinateRandom(min, max, number){
  if ((max>min) && (min>0) && (max>0)) {
    const random = Math.random() * (max - min + 1) + min; //Генерация рандомного числа в диапозоне (число дробное)
    const remainder = 10**number; // Получения числа, для определения количества знаков
    return (Math.ceil(random*remainder)/remainder);//Вычисление нужного числа
  }
  throw new Error('Проверьте введенные числа!');
}

coordinateRandom(1,20,4);

