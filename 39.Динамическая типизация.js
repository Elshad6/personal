'use strict';
//Strimg!
//1 Редко пользуются!
console.log(typeof(String(null)))
console.log(String(4))

//2)
console.log(typeof (null + '')) // Сложение со строкой всегда  возвращает строку;

console.log('https://vk.com/catalog/'+ num);

const fontSize = 26 + 'px'; 

//To Number

//1)
console.log(typeof(Number('4'))); // Этим способом почти не пользуются!

//2)
console.log(typeof(+'5')); // Number;

//3)
console.log(typeof(parseInt('15px', 10))) // number, второрой аргумент десятичная система! испльзуют тоже не часто! 

let answ = +prompt('Hello', ''); //Все что мы получаем от пользователя будет типом данных строка! Значение из promta из inputa из area!

//To boolean

// 0, '', null, undefined, Nan; Это все false!

//1)
let switcher = null;

if(switcher){
    console.log('Working...');
}

switcher = 1;

if(switcher){
    console.log('Working...');
}

//2)

console.log(typeof(Boolean('4'))); // boolean; почти никогда не используют!

//3)

console.log(typeof(!!'4444'));