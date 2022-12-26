// 1. Создайте функцию, которая возвращает квадрат числа. Число передается аргументом(arrow function)
let calc = num => num ** 2
console.log(calc(5));

// 2. Напишите программу, где пользователь вводит любое целое положительное число. А программа суммирует все числа от 1 до введенного пользователем числа.
// Например:
// если пользователь введет число 3. Программа должна посчитать сумму чисел от 1 до 3, то есть 1+2+3 и выдать ответ 6.
// если пользователь введет число 5. Программа должна посчитать сумму чисел от 1 до 5, то есть 1+2+3+4+5 и выдать ответ 15.

let askNum = +prompt('Enter number>0');

function checkTask(n) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
      result += i;
    }
    return result;
  }
console.log(checkTask(askNum))

// 3. Создайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели.(function expression)

let getDayOfWeek = function(dayNumber) {
    switch(dayNumber) {
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      case 7:
        return "Sunday";
      default:
        return "Invalid day number";
    };
};
  
console.log(getDayOfWeek(7)); // "Monday"

// 4. Дан список строк: ['Tom', 'Jack', 'Jessica', 'Helen', 'Bob'], создать функцию, которая будет принимать в качестве аргументов массив со строками и функцию-обработчик, которая в свою очередь будет принимать строку и говорить длинна строки больше или меньше 4х символов, задача: вернуть массив из тех строк, длинна которых больше 4х символов

let names = ['Tom', 'Jack', 'Jessica', 'Helen', 'Bob'];

let checkStrLenght = str => str.length > 4 ? true : false;

function checkStrArr(arr, func) {
    let res = [];
    for(i of arr) {
        if(func(i)) {
            res.push(i);
        };
    };
    return res;
};

console.log(checkStrArr(names, checkStrLenght));

// 5. Напишите функцию sumNum(), которая принимает целое число и возвращает сумму всех его цифр.
// Например, для числа 456, функция должна вернуть:
// 15
// так как 4 + 5 + 6 = 15

function checkTask(num) {
    let arr = num.toString().split('');
    // console.log(arr);
    let res = 0;
    
    for(let i = 0; i < arr.length; i++) {
        res = res + +arr[i];
    }
    return res
};

console.log(checkTask(678));

// 6. Дана переменная let secretNum = 4; это загаданное число, задача: запрашивать у пользователя числа пока он не отгадает нужное число, учесть, что есть всего 3 попытки, после того как он использует все попытки вывести сообщение типа: Game over!, если он отгадал, то сообщение: You are win!
let secretNum = 4;
let attempts = 3;
let guess;

while (attempts > 0) {
guess = prompt("Введите число:");
if (guess == secretNum) {
alert("You are win!");
break;
} else {
attempts--;
if (attempts == 0) {
alert("Game over!");
}
}
}


// 7. Дана переменная let bank = 0; выступает в роли счета на котором лежат деньги, задача: создать 2 функции, которые будут пополнять и снимать деньги со счета, каждая функция в качестве аргумента должна принимать количество денег, чтобы положить/снять со счета, каждая операция должна сопровождаться сообщениями типа: Баланс пополнен на 1200$; или; С вашего счета снято 500$, также у функции для снятия денег должна быть проверка на достаточное количество средств для снятия, если денег недостаточно, выводить сообщение типа: У вас недостаточно средств

let bank = 0;

function addMoney(sum) {
    bank += sum;
    console.log(`Баланс пополнен на ${sum}$`);
    console.log(bank);
}

function withdrawMoney(sum) {
if (sum > bank) {   
    console.log("У вас недостаточно средств");
} else {
    bank -= sum;
    console.log(`С вашего счета снято ${sum}$`);
}
}

addMoney(500); 
withdrawMoney(600);

// 8. Принимать от пользователя строки, пока сам пользователь не решит остановиться, затем создать функцию, которая будет принимать список из строк, которые ввел пользователь, и возвращать список состоящий из длинн этих строк

let userStrings = [];
let input = "";

while (input !== "stop") {
input = prompt("Введите строку или введите «стоп», чтобы закончить ввод:");
if (input !== "остановить") {
userStrings.push(input);
}
}

function getStringLengths(strings) {
let lengths = [];
for (let i = 0; i < strings.length; i++) {
lengths.push(strings[i].length);
}
return lengths;
}

// console.log(getStringLengths(userStrings));

// 9. Дан объект следующего вида: {
//     name: 'Jack',
//     age: 34,
//     work: 'IT',
//     hours: 23,
//    salary: 2300,
// experience: 450
// }, задача: добавить объекту методы: ходить на работу(при вызове этого метода, кол-во часов возрастает на 6, и зарплата тоже растет в пропорции 1час-100$), также должен быть метод Получить зарплату(зарплату можно получить только если уже есть мин. 3000$, после вызова этого метода ключи зарплата и наработанные часы должны быть обнулены, а в ключе опыт, необходимо хранить сумму всех отработанных часов)

let worker = {
    name: 'Jack',
    age: 34,
    work: 'IT',
    hours: 23,
    salary: 2300,
    experience: 450,

    goToWork: function() {
        this.hours += 6;
        this.salary += 600;
    },
    getSalary: function() {
        if (this.salary >= 3000) {
            this.experience += this.hours;
            this.hours = 0;
            this.salary = 0;
        } else {
            console.log('Работай больше чтоб бабки больше получать');
        };
    }
};
    
worker.goToWork();
console.log(worker.hours); // 29
console.log(worker.salary); // 2900
worker.getSalary();
console.log(worker.hours); // 0
console.log(worker.salary); // 0
console.log(worker.experience); 


// 10. Создать игру. Задача: создать программу, которая запрашивает у пользователя данные для 2х героев(сила(макс 100), ловкость(макс 100), стихия(огонь, земля, вода, воздух)), также каждому герою присваивается имя по умолчанию(герой 1, герой 2), каждая стихия повышает силу героя на определенное количество пунктов(огонь +20 к силе, воздух +15 к силе, вода +10 к силе, земля +5 к силе), после добавления героев в бд, устраивать между ними бой и выявлять победителя по следующим характеристикам(победил тот, у кого больше силы, если силы равны, побеждает тот, у кого больше ловкости, если все данные равны, то ничья), выводить информацию в виде имени победителя либо просто сообщение типа: Ничья, в том случае если победителя нет(решитьс помощью функций)

function createHero() {
    let name = prompt("Введите имя героя: ");
    let strength = parseInt(prompt("Введите силу героя: "));
    let agility = parseInt(prompt("Введите ловкость героя: "));
    let element = prompt("Введите стихию героя (огонь, земля, вода, воздух): ");
  
    let hero = {
      name: name,
      strength: strength,
      agility: agility,
      element: element
    };
  
    return hero;
  }
  
  function addStats(hero) {
    if (hero.element === "огонь") {
      hero.strength += 20;
    } else if (hero.element === "воздух") {
      hero.strength += 15;
    } else if (hero.element === "вода") {
      hero.strength += 10;
    } else if (hero.element === "земля") {
      hero.strength += 5;
    }
  }
  
  function battle(hero1, hero2) {
    if (hero1.strength > hero2.strength) {
      return hero1.name;
    } else if (hero1.strength < hero2.strength) {
      return hero2.name;
    } else {
      if (hero1.agility > hero2.agility) {
        return hero1.name;
      } else if (hero1.agility < hero2.agility) {
        return hero2.name;
      } else {
        return "Ничья";
      }
    }
  }
  
  function main() {
    let hero1 = createHero();
    addStats(hero1);
  
    let hero2 = createHero();
    addStats(hero2);
  
    let winner = battle(hero1, hero2);
    console.log(`Победитель: ${winner}`);
  }
  
  main();

// extra

// 1. Дан список товаров следующего вида: [
//     {title: 'Samsung', price: 1000, count: 3, color: ['black', 'white', 'blue']},
//     {title: 'Apple', price: 1300, count: 2, color: ['green', 'space-gray']},
//     {title: 'Xiaomi', price: 600, count: 0, color: []},
//     {title: 'LG', price: 450, count: 5, color: ['black', 'white']},
//     {title: 'Sony', price: 700, count: 4, color: ['white', 'yellow', 'gray']}
// ], задача: запросить у пользователя информацию о том, какой телефон он бы хотел приобрести, затем предложить ему варианты расцветки телефона, после того как пользователь введет цвет, озвучить цену на товар и спросить будет ли он покупать, если ответ положительный то количество товара нужно уменьшить на 1, учесть, что товара может не быть на складе, в этом случае вывести сообщение типа: Извините, в данный момент товара нет на складе(решить с помощью функций)

let products = [
    {
           title: 'Samsung',
           price: 1000,
           count: 3,
           color: ['black', 'white', 'blue']
    },
    {
           title: 'Apple', 
           price: 1300, 
           count: 2,
           color: ['green', 'space-gray']
    },
    {
           title: 'Xiaomi', 
           price: 600, 
           count: 0,
           color: []
    },
    {
           title: 'LG', 
           price: 450, 
           count: 5,
           color: ['black', 'white']
    },
    {
           title: 'Sony', 
           price: 700, 
           count: 4,
           color: ['white', 'yellow', 'gray']
    }
];

function search() {
    let orderBuy = prompt('Какой телефон вы хотели бы приобрести?');
    let checkPhone = false;
    for (let i in products) {
           for (let j in products[i]) {
                  if (products[i][j] === orderBuy) {
                         console.log(products[i][j]);
                         checkPhone = true;
                  } 
           };
           
    };
           
    if (checkPhone === true) {
           switch (orderBuy) {
                  case products[0].title: samsung();
                  break;
                  case products[1].title: apple();
                  break;
                  case products[2].title: xiaomi();
                  break;
                  case products[3].title: lg();
                  break;
                  case products[4].title: sony();
                  break;
           };  
    };
    
    function samsung() {
           alert(`Данный телефон есть в цвете: ${products[0].color}`);
           console.log(products[0].color);
    };
    function apple() {
           alert(`Данный телефон есть в цвете: ${products[1].color}`);
           console.log(products[1].color);
    }; 
    function xiaomi() {
           alert(`Данный телефон есть в цвете: ${products[2].color}`);
           console.log(products[2].color);
    };
    function lg() {
           alert(`Данный телефон есть в цвете: ${products[3].color}`);
           console.log(products[3].color);
    };
    function sony() {
           alert(`Данный телефон есть в цвете: ${products[4].color}`);
           console.log(products[4].color);
    };

    let orderColor = prompt('Введите цвет');
    searchPrice();

    function searchPrice() {
        switch (orderBuy) {
               case products[0].title: alert(`Цена на данный товар: ${products[0].price}$`);
               console.log(products[0].price);
               break;
               case products[1].title: alert(`Цена на данный товар: ${products[1].price}$`);
               console.log(products[1].price);
               break;
               case products[2].title: alert(`Цена на данный товар: ${products[2].price}$`);
               console.log(products[2].price);
               break;
               case products[3].title: alert(`Цена на данный товар: ${products[3].price}$`);
               console.log(products[3].price);
               break;
               case products[4].title: alert(`Цена на данный товар: ${products[4].price}$`);
               console.log(products[4].price);
               break;
        };
 
        let answ = confirm('Желаете купить данный товар?');
        if (answ) deleteProducts();
        else alert('Всего хорошего!'); 
 };

 function deleteProducts() {
        for (let i in products) {
               for (let j in products[i]) {
                      if (products[i][j] === orderBuy && products[i].count > 0) {
                             products[i].count--;
                             console.log(products[i]);
                             return main();
                      } else if (products[i][j] != orderBuy && products[i].count === 0) {
                             alert('Извините, в данный момент товара нет на складе')
                      };
               };
        };
 }
};

function main() {
 let orderMain = prompt('Посмотреть телефон(s), выйти из магазина(e)');
 switch (orderMain) {
        case 's': search(); break;
        case 'e': break;
 }
}

main()

// 2. Дан список дел в формате: [
//     {id: 1, todo: 'Принять душ', done: false},
//     {id: 2, todo: 'Завтрак', done: false},
//     {id: 3, todo: 'Пойти на работу', done: false},
//     {id: 4, todo: 'Приготовить ужин', done: false},
//     {id: 5, todo: 'Лечь спать', done: false}
// ], задача: принимать от пользователя айди того, что он сделал и менять статус на true, также должна быть возможность добавлять новые пункты дел, учесть, что айди должен быть уникальным(решить с помощью функций)
let affairs = [
    {
           id: 1,
           todo: 'Принять душ',
           done: false
    },
    {
           id: 2,
           todo: 'Завтрак',
           done: false
    },
    {
           id: 3,
           todo: 'Пойти на работу',
           done: false
    },
    {
           id: 4,
           todo: 'Приготовить ужин',
           done: false
    },
    {
           id: 5,
           todo: 'Лечь спать',
           done: false
    }
];

function justDoIt() {
    let orderDoIt = +prompt('Ведите ID дела, которое нужно сделать')
    for (let i in affairs) {
           for (let j in affairs[i]) {
                  if (orderDoIt === affairs[i].id) {
                         affairs[i].done = true;
                         alert('Дело сделано!');
                         return main();
                  };// else {(orderDoIt != affairs[i].id) 
                //          alert('Такого ID не существует!'), main();
                //   };
           };
    };
};

function addAffairs() {
    let orderAddTodo = prompt('Введите название дела');

    affairs.push({ id: Date.now(), todo: orderAddTodo, done: false })
    main()
};

function readAffairs() {
    for (let i in affairs) {
           console.log(affairs[i]);
    };
    return main()
}

function main() {
    let orderMain = prompt('Введите вы хотите сделать: сделать дело(d), добавить дело(a), просмотреть список дел(r), выйти(e)');
    switch (orderMain) {
           case 'd': justDoIt(); break;
           case 'a': addAffairs(); break;
           case 'r': readAffairs(); break;
           case 'e': break;
    };
};

main()

  