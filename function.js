'use strict';
//FUNCTION DECLARATION - Создается до начала выполнения скрипта, можно вызвать перед объявлением!
let num = 20;

function showFirstMessage(text) {
    console.log(text);
    num = 10;
}

showFirstMessage('Hello World');
console.log(num);


console.log(calc(4, 5))
console.log(calc(6, 5))
console.log(calc(10, 5))
function calc(a, b){
    return (a + b);
}



// FUNCTION EXPRESSION - Создается только тогда, когда доходит поток кода, можно вызвать только после объявления!
function ret() {
    let num = 50;

    return num;
}

const anotherNum = ret();
console.log(anotherNum);


const logger = function() {
    console.log('Hello');
}

logger();


// СТРЕЛОЧНАЯ ФУНКЦИЯ!

const calc = (a, b) => {return a + b};

console.log(calc(5,5));

//конвертирование валюты

const usdCurr = 81;
const eurCurr = 89;

function convert(amount, curr) {
    console.log(curr * amount);
}

convert(100, usdCurr);
convert(100, eurCurr);


//RETURN

const usddCurr = 81;
const discount = 0.9;

function convert(amount, curr) {
    return curr * amount
}

function promotion(result) {
    console.log(result * discount);
}

const res = convert(100, usddCurr);
promotion(res);
// promotion(convert(100, usddCurr)); можно и так ! тоже самое


function test() {
    for(let i = 0; i < 5; i++){
        console.log(i);
        if(i === 3) return
    }
    console.log('Done') //Функция не доходит до этого этапа
}


function doNothing() {};
console.log(doNothing() === undefined); // - Почему консоль возвращает underfinde ? Потому что console.log - это функция и ничего не возвращает!



// Задачи!!

// 1) Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.

// Пример: вызов функции sayHello('Антон') возвращает строку "Привет, Антон!". В решении вызывать функцию не нужно, программа сделает это за вас.

function sayHello(name){
    console.log(`Привет ${name}!`)
}
sayHello('Антон');


// 2) Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.

// Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6].


function returnNeighboringNumbers(num){
    return [num - 1, num, num + 1];
}
console.log(returnNeighboringNumbers(5));


// 3) Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть.

// Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через оператор typeof)

function getMathResult(a, b) {
    if(typeof b === 'string' || b <= 0){
        return a;
    }

    let str = `${a}`;
    for(let i = 1; i < b; i++){
        str += `---${a * (i + 1)}`;
    }
    return str;
}

console.log(getMathResult(10,5));
console.log(getMathResult(20,'5'));
console.log(getMathResult(20,-5));


// 1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба (тоже базовая математика, иногда используется в создании анимаций). Эта функция принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки, который изображен в примерах.

// Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка"

// НЕ ИСПОЛЬЗУЙТЕ ОПЕРАТОР СТЕПЕНИ ** - в онлайн среде браузера он не работает и тесты будут ломаться. Это из-за того, что этот оператор из более нового стандарта, чем тут доступен.

// Примеры:
// calculateVolumeAndArea(5)  => 'Объем куба: 125, площадь всей поверхности: 150'
// calculateVolumeAndArea(15)  => 'Объем куба: 3375, площадь всей поверхности: 1350'
// calculateVolumeAndArea(15.5)  => 'При вычислении произошла ошибка'
// calculateVolumeAndArea('15')  => 'При вычислении произошла ошибка'
// calculateVolumeAndArea(-15)  => 'При вычислении произошла ошибка'

function calculateVolumeAndArea(length) {
    if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
        return "При вычислении произошла ошибка";
    }

    let volume = 0,
        area = 0;

    volume = length * length * length;
    // length ** 3 - это тоже самое, что и выше или варианты через цикл.
    // ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
    area = 6 * (length * length);

    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}


// Место для второй задачи
// Напишите функцию, которая будет определять номер купе по переданному ей номеру места. Наглядно:

// Функция принимает только целое число от 1 до 36.

// Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:

// "Ошибка. Проверьте правильность введенного номера места"

// Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"

// Пример:
// getCoupeNumber(33)  => 9
// getCoupeNumber(7)  => 2
// getCoupeNumber(300)  => "Таких мест в вагоне не существует"
// getCoupeNumber(0)  => "Таких мест в вагоне не существует"
// getCoupeNumber(7.7)  => "Ошибка. Проверьте правильность введенного номера места"
// getCoupeNumber(-10)  => "Ошибка. Проверьте правильность введенного номера места"
// getCoupeNumber('Hello')  => "Ошибка. Проверьте правильность введенного номера места"

// Такая функция вполне реальна и может использоваться для формирования билетов, в том числе и визуально на сайтах. Конечно, там будет куда больше условий, но смысл остается таким же.


   function getCoupeNumber(num) {
  if(typeof(num) !== 'number'|| num < 0 || !Number.isInteger(num)){
    return "Ошибка. Проверьте правильность введенного номера места";
  }
  if(num <= 4 && num > 0){
     return 1;
  } else  if(num <= 8 && num > 4){
      return 2;
  } else if(num <= 12 && num > 8){
      return 3;
  } else if (num <= 16 && num > 12){
      return 4;
  } else if(num <= 20 && num > 16){
    return 5;
  } else if(num <= 24 && num > 20){
    return 6;
  } else if(num <= 28 && num > 24){
    return 7;
  } else if (num <= 32 && num > 28){
    return 8;
  } else if( num <= 36 && num > 32){
    return 9;
  } else if(num > 36 || num === 0) {
    return("Таких мест в вагоне не существует");
  }
        return num;
  }
getCoupeNumber(0);


// Задачи:
// 1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"

// Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.

// Пример:
// getTimeFromMinutes(150) => "Это 2 часа и 30 минут"
// getTimeFromMinutes(50) => "Это 0 часов и 50 минут"
// getTimeFromMinutes(0) => "Это 0 часов и 0 минут"
// getTimeFromMinutes(-150) => "Ошибка, проверьте данные"


function getTimeFromMinutes(min) {
    if(min < 0 || min % 10 > 0){
         return "Ошибка, проверьте данные";
        }

    let hour = min / 60; 
    let minute = min % 60;

    if(hour < 1){
        return `Это ${Math.floor(hour)} часов и ${minute} минут`;
    }

    if(hour >= 1 && hour < 2){
        return `Это ${Math.floor(hour)} час и ${minute} минут`;
    }

    return `Это ${Math.floor(hour)} часа и ${minute} минут`;
}

// Задача!
// 2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

// Пример:
// findMaxNumber(1, 5, 6.6, 11); =>  11
// findMaxNumber(1, 5, '6', '10');  =>  0

function findMaxNumber(a,b,c,d) {
    if(a === null || b === null || c === null || d === null || typeof(a) !== 'number'|| typeof(b) !== 'number' || typeof(c) !== 'number'|| typeof(d) !== 'number'){
        return 0;
    }
    return Math.max(a,b,c,d);
}
findMaxNumber(10,20,5,32);

// Задача:

// Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число. Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи. Причем, их количество должно быть равно переданному аргументу.

// Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.

// Пример:
// fib(4) => ''0 1 1 2"
// fib(7) => ''0 1 1 2 3 5 8"
// fib('7') => ''"
// fib(1) => "0"
// fib(0) => ''"
// Задача непростая для новичков, так что с первого раза может не получится.

function fib(num) {
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return "";
    }

    let result = '';
    let first = 0;
    let second = 1;

    for (let i = 0; i < num; i++) {
        if (i + 1 === num) {
            result += `${first}`;
            // Без пробела в конце
        } else {
            result += `${first} `;
        }

        let third = first + second;
        first = second;
        second = third;
    }

    return result;
}
console.log(fib(5))