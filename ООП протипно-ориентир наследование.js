'use strict';

let str = 'some';
let strObj = new String(str);

console.log(typeof(str)); // String
console.log(typeof(strObj)); // Obj сначало делает объект а потом только строку из за метода!

const solider = {
    health: 400,
    armor: 100,
    sayHello: function(){
        console.log('Hello');
    }
}

const jonhh = Object.create();//Для создание прототипных свзязей! Этот вариант еще лучше


const jonh = {
    health: 100
};




jonh.__proto__ = solider; // Сделали прототип солдату, Наследовали! Устаревший ВИД!

Object.setPrototypeOf(jonh, solider);// Создает прототип!! 

console.log(jonh.armor); // Блогодаря прототипу взял armor!
jonh.sayHello();