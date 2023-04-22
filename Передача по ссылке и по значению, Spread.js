'use strict';

// Важно!! когда мы рабоатаем с примитивным типами данных строки,числа, логических значений, то они передатся по значению! 
let a = 5,
    b = a;

b = b + 5;
console.log(b);
console.log(a);

// Но когда мы рабоаем с каким то обьектами, масиивами, функциями то они передаются не по значению а по ссылке!
const obj = {
    a: 5,
    b: 1
};

const copy = obj; // вот это передача по ссылке!

copy.a = 10;

console.log(copy);
console.log(obj);

// А как же тогда создавать копию ?

function copy(mainObj){
    let objCopy = {};

    for(let key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    },

};

const newNumbers = copy(numbers);

newNumbers.a = 10;
// Когда мы клонируем обьекты есть два очень важных понятия это глубокие и поверхностные копии обьектов!
newNumbers.c.x = 10; // Снова передача по ссылке! потому что объект внутри объекта!
console.log(newNumbers);
console.log(numbers);
// ПОКА МЫ РАБОТАЕМ С ПОВЕРХНОСТНЫМ КЛОНИРОВАНИЕМ!

const add = {
    d: 17,
    e: 20
};

// console.log(Object.assign(numbers, add)); // Обьединяет обьекты!

const clone = Object.assign({}, add); // Тоже рабоает это поверхностоне клонирование!

clone.d = 20;

console.log(add);
console.log(clone);


//МАССИВЫ как копировать!

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'adsadasd';
console.log(newArray);
console.log(oldArray);


// ОПЕРАТОР РАЗВОРОТА SPREAD! 

const video = ['youtibe', 'vimeo', 'rutube'],
      blogs = ['wordpreees', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];
console.log(internet);

function log(a, b, c){ // ТОЖЕ ПОВЕРХНОСТНОЕ КОПИЯ ОБЬЕКТА
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ['a', 'b'];
const newAarray = [...array]; // С помощью spread опрератора тоже копируем без slice()!
console.log(newAarray);

const q = {
    one: 1,
    two: 2
};

const newObj = {...q}; //С помощью spread опрератора тоже копируем 
newObj.one = 5;
console.log(newObj);
console.log(q);