'use strict';

if(1){
    console.log('Ok!');
} else {
    console.log('Error');
}


const num = 50;

if(num < 49){
    console.log('Error');
} else if(num > 100){
    console.log('Много')
} else {
    console.log('OK!');
}

const numm = 50;
(numm === 50) ? console.log('OK!') : console.log('Error');

const nnum = '50'
switch (nnum) {
    case '49': 
        console.log('Неверно');
        break;
    case '100': 
        console.log('Неверно');
        break;
    case '50':
        console.log('В точку');
        break;
    default: 
        console.log('Не в этот раз');
        break;
}

