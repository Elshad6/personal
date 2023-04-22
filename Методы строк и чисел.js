"use strict";

const str = 'test';

console.log(str.toUpperCase()) // не меняет значание! создает новое
console.log(str.toLowerCase())
сonsole.log(str);

const fruit = 'Some fruit';

console.log(fruit.indexOf('fruit')); // - Это называется поиск под строки!
console.log(fruit.indexOf('q')); // -1 Значит ничего не найдено!


const logg = 'Hello world';

console.log(logg.slice(6)) // - до конца идет !
console.log(logg.slice(6,11)) // последнию букву не включает!

console.log(logg.substring(6,11)); // Тоже самое что slice!

consolel.log(logg.substr(6,5)); // Сколько символоф надо отрезать!

console.log(logg.trim()) // Очень полезый метод ! убирает пробелы!


// Числа!

const num = 12.2;
console.log(Math.round(num));

const test = '12.2px';
console.log(parseInt(test)); // Переводит число в другую систему исчисления!
console.log(parseFloat(test)); // Возвращает в десятичном значении!

if(typeof(num) !== 'number'|| num < 0 || !Number.isInteger(num)){} // - Это значит  Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение: