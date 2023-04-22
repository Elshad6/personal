'use strict';
// Логическое И!

// const hamburger = 5;
// const frires = null;

// if(hamburger && frires){
//     console.log('Я сыт!');
// }

// const hamburger = 3;
// const frires = 1;
// const cola = 1;

// console.log(hamburger === 3 && cola && frires);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'esaeas');


// if(hamburger === 3 && cola && frires){
//     console.log('Мы сыты!');
// } else {
//     console.log('Мы уходим');
// }


// Логическое ИЛИ!

const hamburger = 3;
const frires = 3;
const cola = 0;
const nuggets = 2;

if(hamburger === 3 && cola || frires === 3 && nuggets){
    console.log('Все довольны!');
} else {
    console.log('Мы уходим!');
}

console.log(hamburger === 3 && cola || frires === 3 && nuggets); //Выводит последнее значение! 

let jognReport, alexReroty, samReport, mariaReport = 'done';
console.log(jognReport || alexReroty || samReport || mariaReport); 


console.log(!0); // Выводит true!

// Задачи!

console.log(NaN || 2 || undefined); // 2
console.log(NaN && 2 && undefined); // NaN
console.log(1 && 2 && 3); // 3
console.log(!1 && 2 || !3); // false
console.log(25 || null && !3); // 25
console.log(NaN || null || !3 || undefined || 5); // 5
console.log(NaN || null && !3 && undefined || 5); // 5
console.log(5 === 5 && 3 > 1 || 5); // true!