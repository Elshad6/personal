// 1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.

// Пример:

// showExperience(personalPlanPeter) => '1 month'

// P.S. желательно использовать деструктуризацию, но не обязательно

// 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.

// Пример:

// showProgrammingLangs(personalPlanPeter)  =>

// "Язык js изучен на 20% Язык php изучен на 10%"

// Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.

// P.S. Для переноса строки используется \n в конце строки.

// 3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.

// Пример:

// personalPlanPeter.showAgeAndLangs(personalPlanPeter)
// => 'Мне 29 и я владею языками: RU ENG'

// Заметьте, что возраст и языки подставляются автоматически из объекта, а языки всегда в верхнем регистре (большими буквами). Если данные в объекте поменяются, то и сообщение тоже изменится.


const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
       showAgeAndLangs: function(plan){
        const {age} = plan;
        const {languages} = plan.skills;
        let str = `Мне ${age} и я владею языками: `
        languages.forEach(lang =>{
            str += `${lang.toUpperCase()} `;
        })
        return str;
    }
};

function showExperience(plan) {
    const {exp} = plan.skills;
    return exp;
}


function showProgrammingLangs(plan) {
let str = '';
const {programmingLangs} = plan.skills;
for(let key in programmingLangs){
    str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
}
 return str;
}
showProgrammingLangs(personalPlanPeter);


// У вас есть небольшой кусочек данных о торговом центре, которые записаны в объекте shoppingMallData. Они содержат массив с данными о магазинах, где указана длина и ширина помещения; высоту помещения; стоимость отопления за 1 кубический метр и бюджет на оплату отопления за месяц.

// Основная задача - это написать функцию isBudgetEnough, которая буде возвращать строку. Если бюджета хватает для отопления всего объема торгового центра - выводится 'Бюджета достаточно', если нет - 'Бюджета недостаточно'. И все 🙂

// Но эта задача содержит несколько подзадач внутри:

// 1 - вычисление общей площади всех магазинов, которая вычисляется как длина магазина, умноженная на его ширину;

//2 - вычисление общего объема торгового центра, так как цена отопления указана в кубических метрах;

//3 - определение того, хватает ли бюджета на оплату такого объема;

//4 - все числа идут без единиц измерения для упрощения, просто цифры и все;

//5 - функция должна продолжать работать, даже если изменяется количество магазинов, высота, бюджет или подставляется вообще другой объект.


const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};


    function isBudgetEnough(data) {
    let square = 0;
    let volume = 0;
    data.shops.forEach(shop => {  // 1 Задача!
        square += shop.width * shop.length;
    });
    volume = data.height * square; //2 Задача!


  if(data.budget-(volume * data.moneyPer1m3) >= 0){ //3,4,5 Задача!
    return `Бюджета достаточно`;
   } else {
    return `Бюджета недостаточно`;
   }
}
console.log(isBudgetEnough(shoppingMallData));
