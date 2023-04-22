let arr = [21, 23, 3, 6, 8, 10];
console.log(arr.length) // свойство length  состоит из последнего индекса плюс один!

const a = arr.sort((a,b)=> a-b);
console.log(a);
// arr.pop()
// arr.push(10);
// console.log(arr);

arr.forEach(function(item, i, arr){
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}


for (let value of arr){ // есть один плюс в том что можно тут использовать метот break или continue
    console.log(value);
}

// SPREAD!


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

