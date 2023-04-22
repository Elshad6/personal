// 1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.

// showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'

// Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'


const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    if(arr.length === 0){
        return `Семья пуста`;
    }
    let a = arr.join(' ');
    return `Семья состоит из: ${a}`;
}


// 2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль эти строки в нижнем регистре.

// Пример:

// standardizeStrings(favoriteCities)  выведет в консоль

// lisbon
// rome
// milan
// dublin
// Это частая задача в реальности, так как от пользователя нам могут прийти ответы в самых разных форматах. В том числе и с разными буквами :) Поэтому нам нужно привести строки в один формат для правильной работы.


const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];
function standardizeStrings(arr) {
     arr.forEach(item => {
       console.log(item.toLowerCase())
    });
}
console.log(standardizeStrings(favoriteCities));


// 3) Задача с собеседований. Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.

// Пример:

// const someString = 'This is some strange string';
// reverse(someString) => 'gnirts egnarts emos si sihT'

// Функцию можно применить к любой строке. Если в функцию приходит не строка - вернуть сообщение "Ошибка!"


const someString = 'This is some strange string';

function reverse(str) {
    if(typeof(str) !== 'string'){
        return 'Ошибка!'
    }
    return String(str).split('').reverse().join('');
}

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr,missingCurr){
    let str = '';
     if(arr.length === 0){
        str = `Нет доступных валют` ;
     } else {
        str = `Доступные валюты:\n`;
     }
     arr.forEach(curr => {
        if(curr !== missingCurr){
            str += `${curr}\n`;
        }
     });
     return str;
}
console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));


// Задача:

// У вас есть список учеников, которые хотят поиграть в игру:

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
// Но команд может быть только 3 по 3 человека. Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк.

// Внутри она сначала сортирует имена по алфавиту. Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку. Эти группы должны быть массивами. Как итог, функция возвращает новый массив с тремя командами и строкой как 4й элемент.

// Пример:

// sortStudentsByGroups(students)  =>

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: Takesi'
// ]
// Если убрать одно студента из списка, то результат будет:

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: -'
// ]
// А если добавить одного, то:

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: Takesi, Somebody'
// ]
// То есть, меняется содержимое строки. Все оставшиеся ученики попадают туда.

// Задача интересная, немного заковыристая, но все необходимое для неё мы уже проходили. Просто распишите логику действий строка за строкой.


const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    arr.sort();
    
    const a =[], b = [], c = [], d = [];

    for(let i = 0; i < arr.length; i++){
        if(i < 3){
            a.push(arr[i]);
        } else if (i < 6){
            b.push(arr[i]);
        } else if (i < 9){
            c.push(arr[i]);
        } else {
            d.push(arr[i]);
        }
    }

    return [a,b,c, `Оставшиеся студенты: ${d.length === 0 ? '-' : d.join(', ')}`]
}
console.log(sortStudentsByGroups(students));


// ВТОРОЕ РЕШЕНИЕ ЭТОЙ ЗАДАЧИ!

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
// function sortStudentsByGroups(arr) {
// arr.sort();
// let arrGroup = [];
// for (let i = 0; i < 3; i++) arrGroup.push(arr.splice(0, 3));
// arrGroup.push(`Оставшиеся студенты: ${!arr.length ? `-` : arr.join(", ")}`);
// return arrGroup;
// }

// console.log(sortStudentsByGroups(students));