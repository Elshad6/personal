const arr = ['a','b','c'];
const arrObj = {
    a: 'a',
    '1': 'b',
    2: 'c'
};

const b = 'b';
arrObj[b] = '1234'; // Можно создать так ,Динамический тип данных!

// arrObj.b = '1234'; // Можно обращаться так 
arrObj['b'] = '1234'; // Можно обращаться так 

console.log(arrObj['b']);
console.log(arrObj.b);