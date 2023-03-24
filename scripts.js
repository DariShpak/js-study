// let b = 18

// let a = `he said he is okay ${b} times`

// console.log(a)
// console.log(typeof a)

// const pin = 1;

// console.log(pin);

// let dog = {
//   color: "red",
//   mood: "sleepy",
//   age: "1",
//   rocky: {
//     breed: "chihuahua",
//     type: "shorthair",
//   }
// }

// if (dog.age == '1') {
//   console.log('the dog is 1');
// } else if (dog.age == '4') {
//   console.log('the dog is 4');
// } else {
//   console.log('age undefined')
// }

// console.log(dog.color)

// dog.color = "white"
// console.log(dog.color)

// function colorChange() {
//   dog.color = "red"
//   console.log(dog.color)
// }

// colorChange ()

// let hoodie = {
//   color: 'beige',
// }

// let hoodie2 = {
//   color: 'white',
// }

// colorChange(hoodie2)

// function colorChange(theHoodie) {
//   theHoodie.color = 'pink';
// }

// console.log("Hoodie: " + hoodie.color);
// console.log("Hoodie2: " + hoodie2.color)

// function watch(message = 'text') {
//   console.log(message);
// }
// watch();

// function watch(message) {
//   return message + " - making a shitate"
// }

// console.log(watch("качоєпєпє"))

// let anonym = function () {
//   console.log("we are anonymous")
// }

// let anonym = () => "you are anonymous"

// console.log(anonym())

// let car = {
//   color: 'red',
//   open: function () {
//     console.log('i have a car')
//     console.log('my car is pretty good')
//   }
// }

// car.open()

// let car = {
//   color: 'green',
//   open(message) {
//     console.log(message)
//   }
// }

// car.open('i have a car - 2')

// const array = [1, 3, 10, 69];

// console.log(array[2]);

// let i = x = 10;
// i = i + x;
// console.log(i)

// let i = 1;
// i = i + 1;
// console.log(i)

// let i = 1
// console.log(++i)

// let i = 3
// console.log(i++)
// console.log(i)

// let o = 3;
// console.log(--o)
// console.log(o)

// let i = 3;
// console.log(i--)
// console.log(i)

// let drivers = ['Dasha', 'Alisa']
// console.log(drivers[0])
// console.log(drivers[1])

// console.log(drivers.length)
// let drivers = ["Dasha", "Alisa", "Mark"]
// for (let i = 0; i < drivers.length; i++) {
//   console.log(drivers[i])
// }

//

// ПРИКЛАД 1
// написати скрипт, який перевіряє можливість відкрити чат з користувачем,
// для чого той повинен бути
// - другом
// - онлайн
// -  без режиму не турбувати

// const isFriend = true;
// const isOnline = true;
// const isDnd = false;

// const canOpenChat = isFriend && isOnline && !isDnd;

// console.log('Чи можна відкрити чат?', canOpenChat)

// ПРИКЛАД 2
// Напиши скрипт перевірки підписки користувача при доступі до контенту
//   - є три типи підписки: free, pro i vip
//   - отримати доступ можуть тільки користувач pro i vip

// const subscriptions = 'free';

// const canAccessContent = subscriptions === 'pro' || subscriptions === 'vip';
// console.log('Чи є доступ до контенту?', canAccessContent)

// for (let i = 0; i < 5; i += 1) {
//   console.log(i);
// }
// console.log('даша котик программист')

// // i += 1 це і = і + 1

// Задачка від репети
// Напиши скрипт, який вираховує загальну суму зарплат робітників.
// кількість працівників зберігається в змінній employees
// Зарплата кожного робітника це випадкове число від 500 до 5000
// Запиши суму в змінну totalSalary  і виведи в консоль

// //   1 - зробити вари ???????
// const minSalary = 500
// const maxSalary = 5000
// const employees = 4
// let totalSalary = 0

// //   2 - перерахувати працівників в циклі

// for (let i = 1; i <= employees; i += 1) {
//   //   3 - згенерити випадкову зарплату
//   const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary)
//   console.log(`Зп працівника номер ${i} - ${salary}`)

//   //   4 - додати до тотал
//   totalSalary += salary
// }

// //   5 - лог
// console.log(`totalSalary = ${totalSalary}`)

// задача від репети
// напиши скрипт, який рахує суму всіх парних чисел,
//   що входять в діапазон чмсел в змінних від мін до мах
// Наприклад, якщо мін = 0 і мах = 5, то діапазон 0 - 5, в ньому два парних числа - 2 і 4, їхня сума - 6

// 1 вари

// const min = 6;
// const max = 13;
// let total = 0;

// // фор от мін до макс із шагом 1

// for (let i = min; i <= max; i += 1) {

//   if (i % 2 === 0) {
//     console.log('парне: ', i);

//     total += i;
//   }
// }
// // перевіряємо залишок від ділення

// // пишемо в суму

// console.log(`total = ${total}`);

// або вирішення від зворотнього, де спочатку перевіряється поганий кейс.Такий код вірніший

// const min = 6;
// const max = 13;
// let total = 0;

// // фор от мін до макс із шагом 1

// for (let i = min; i <= max; i += 1) {

//   if (i % 2 !== 0) {
//     console.log('не парне: ', i);
//     continue;
//   }

//   console.log('парне: ', i)
//   total += i;
// }
// // перевіряємо залишок від ділення

// // пишемо в суму

// console.log(`total = ${total}`);

// задачка від репети

// Напиши скрипт обробки покупки в магазинію

//   - Баланс користувача зберігається в змінній balance
//   - Сума покупки зьерігається в змінній Payment
// Перед перевіркою необхідно вивести повідомлення
// "Загальна сума замовлення [число] кредитів. Перевіряємо кількість наявних коштів для проведення операції"

// Якщо сума не перевищує баланс:
// - Відняти від балансу суму покупки
//   - Вивести повідомлення "На рахунку залишилось число] кредитів".

//   Якщо сума покупки перевищує баланс
//   - Вивести повідомлення "На рахунку недостатньо коштів для проведення операції!"
// В кінці вивести повідомлення "операція завершена"

// let balance = 10000
// const payment = 2000

// console.log(
//   `Загальна сума замовлення ${payment} кредитів. Перевіряємо кількість наявних коштів для проведення операції`
// )

// if (payment <= balance) {
//   // const balanceAfter = balance - payment
//   // console.log(`На вашому рахунку залишилось ${balanceAfter} кредитів.`)
//   // //  для чистоти коду balance -= payment (присвоєння та оголошення)

//   balance -= payment
//   console.log(`На вашому рахунку залишилось ${balance} кредитів.`)

// } else {
//   console.log("На вашому рахунку недостатньо коштів для проведення операції!")
// }

// console.log("Операція завершена")

const totalSpent = 50
let payment = 800
let discount = 0

if (totalSpent < 100) {
  console.log("Ви ще не маєте партнерської знижки")
  discount = 0
} else if (totalSpent > 100 && totalSpent < 1000) {
  console.log("Бронзовий партнер, знижка 2%")
  discount = 0.02
} else if (totalSpent > 1000 && totalSpent < 5000) {
  console.log("Срібний партнер, знижка 5%")
  discount = 0.05
} else {
  console.log("Золотий партнер, знижка 10%")
  discount = 0.1
}

console.log(
  `Оформлюємо замовлення на суму ${payment} зі знижкою ${discount * 100} %`
)
