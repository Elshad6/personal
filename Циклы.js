'use strict';

// let num = 50;

// while(num <= 55){
//     console.log(num);
//     num++;
// } 

// do{
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for(let i = 1; i < 8; i++){
//     console.log(num);
//     num++;
// }


// for(let i = 1; i < 10; i++){
//     if(i === 6){
//         // break;
//         continue;
//     }
//     console.log(i);
// } 


// ЦИКЛ В ЦИКЛЕ!

// for(let i = 0; i < 3; i++){
//     console.log(i);
//     for(let j = 0; j < 3; j++){
//         console.log(j);
//     }
// }


// *
// **
// ***
// ****
// *****
// ******

// let result = '';
// const length = 7;

// for(let i = 1; i < length; i++){

//     for(let j = 0; j < i; j++){
//         result += '*';
//     }

//     result += '\n'
// }
// console.log(result);





// first: for(let i = 0; i < 3; i++){
//     console.log(`Frist level: ${i}`)
//     for(let j = 0; j < 3; j++){
//         console.log(`Second level: ${j}`)
//         for(let k = 0; k < 3; k++){
//             if(k === 2) continue first;
//             console.log(`Third level: ${k}`) 
//         }
//     }
// }


// Задачи!


// При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой
for (let i = 5; i <= 10; i++){
    console.log(i);
}

// При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл
for (let i = 20; i >= 10; i--){
    if(i === 13) break;
    console.log(i);
}

// При помощи цикла for выведите чётные числа от 2 до 10 включительно

for(let i = 0; i <= 10; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}


// Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть.

//  Цикл, который нужно переписать:
 
//  for (let i = 2; i <= 16; i++) {
//      if (i % 2 === 0) {
//          continue;
//      } else {
//          console.log(i);
//      }
//  }

let i = 2;

while(i <= 16){
    if(i % 2 === 0){
        i++;
        continue;
    } else {
        console.log(i);
    }
    i++
}
console.log(i);


// Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]

function fifthTask() {
    const arrayOfNumbers = [];
    let index = 0;
    for(let i = 5; i <= 10; i++){
        arrayOfNumbers[index] = i
        index++
    }
    
    
    return arrayOfNumbers;
}

console.log(fifthTask());



// Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.
// Должен получиться точно такой же массив

function firstTask() {
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    for(let i = 0; i < arr.length; i++){
        result.push(arr[i]);
    }
    return result;
    
}
console.log(firstTask());


// Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

function secondTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    for(let i = 0; i < data.length; i++){
        if(typeof data[i] === 'number'){
            data[i] *= 2;
        } else if (typeof data[i] === 'string'){
            data[i] += ' - done';
        }
    }
    return data;
}
console.log(secondTask());


// Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]

function thirdTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];
    
    for(let i = data.length - 1; i >= 0; i--){
        result.push(data[i]);
    }
    return result;
}
console.log(thirdTask());

// Иногда можно встретить просто нереальные вещи, построенные только при помощи кода. Но мы с вами займемся базовой фигурой. Сейчас вам необходимо написать код, который при помощи звездочек (*) в консоли нарисует вот такую фигуру:

//      *
//     ***
//    *****
//   *******
//  *********
// ***********
// (Подсказка: в конце фигуры есть перенос строки \n, который тоже учитывается в тестах. В КОНЦЕ КАЖДОЙ СТРОКИ НЕТ ПРОБЕЛОВ, ТОЛЬКО ПЕРЕНОС)


const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result);


