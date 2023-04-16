'use strict';

const result = confirm('Are you here?');
console.log(result);

const answer = +prompt('Вам есть 18?', '18');
console.log(answer + 5);

const answers = [];

answers[0] = prompt('Как ваше имя', '');
answers[1] = prompt('Как ваше фамилия', '');
answers[2] = prompt('Сколько вам лет', '');

console.log(typeof(answers));
console.log(typeof(null)); // Будет object Ошибка js!