const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red',
    },
    makeTest: function(){
        console.log('Test')
    }
};

console.log(options.name); //Обратиться к ключу!

// delete options.name; // Удалить!

options.makeTest(); // Запускаем метод!

// Методы объектов!
console.log(Object.keys(options).length); // - length чтобы узнать длинну обеъкта!
console.log(Object.assign()); // Это метод объединяет обьекты!


for (let key in options){  // Обращение к ключам!
    if(typeof(options[key]) === 'object'){
        for (let i in options[key]){
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`)
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`)
    }
}

const {border, bg} = options.colors // Это называется Деструктурация! - десткру - значит поделить на маленькие удобные кусочки!

// SPREAD!

const q = {
    one: 1,
    two: 2
};

const newObj = {...q}; //С помощью spread опрератора тоже копируем 
newObj.one = 5;
console.log(newObj);
console.log(q);


const jonhh = Object.create();//Для создание прототипных свзязей! Этот вариант еще лучше
Object.setPrototypeOf(1, 2); // Создает прототип!! 
