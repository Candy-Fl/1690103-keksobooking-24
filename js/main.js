// Функция, которая выводит случайное число в диапозоне от min до max
function selfRandom(min, max)
{
  if (max>min) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
  }
  console.log('min Должно быть больше, чем max');
}
selfRandom(1,20);

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.

function coordinateRandom(min, max, number)
{
  if ((max>min) && (min>0) && (max>0)) {
    let random = Math.random() * (max - min + 1) + min; //Генерация рандомного числа в диапозоне (число дробное)
    let remainder = 10**number;
    return (Math.ceil(random*remainder)/remainder);
  }
  console.log('Проверьте введенные числа!');
}

coordinateRandom(1,20,4);
selfRandom(1,20);
