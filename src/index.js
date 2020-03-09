module.exports = function towelSort (matrix) {
  const arr = matrix;
  let answer = [];
if ( arr === undefined) {//для ошибок
  return [];
}
  if ( arr.length == 0) {//для ошибок
  return [];
}
  if (arr.length > 1) {// проверка не пустой ли массив приходит
for (let index = 0; index < arr.length; index++) {
  let arrLang = arr[index].length;
for (let i = 0; i < arrLang; i++) {//пушим в новый массив инфу с первого приходящего
  if( index % 2 == 0 ) {
answer.push(arr[index][i])
}
let lem= arrLang-(i+1);
  if( index % 2 !== 0 ) {// реверсим второй приходящий массив и пушим инву (начиная с  конца массива)
answer.push(arr[index][lem])
}
}
}

} 
return answer;
}
//входим в первый массив извлекаем данные второй массив реверсим извлекаем данные
//входим в третий извлекаем, четверный реверсим