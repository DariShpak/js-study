// const friends = ["Monica", "Phoebe", "Rachel", "Ross", "Joey", "Chandler"]
// console.log(friends)

// console.table(friends)

// const lastIndex = friends.length - 1
// console.log(lastIndex)

// // звернутись до елементу масиву
// console.log(friends[3])

// // змінити елемент масиву
// friends[2] = 'honey Rachel'
// console.log(friends)

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message;

// for (const client of clients) {
// if (client === clientNameToFind) {
//     message = "Клієнт з таким ім'ям є в базі даних!";
//     break;
// }
//    message = "Клієнт з таким ім'ям відсутній в базі даних!";
// }
// console.log(message)

// порахувати загальну суму покупок

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// // 2. зробити змінну тотал до циклу
// // let total = 0;
// // // 1 - перебираємо масив
// // for (let i = 0; i < cart.length; i += 1) {
// //   console.log(cart[i]);

// //   total += cart[i];
// // }
// // // console.log(total);


// // або

// // for (const value of cart) {
// //   total += value;
// // }

// // console.log(total);

// // і додати такси

// for (let i = 0; i < cart.length; i += 1) {
//   cart[i] = Math.round(cart[i] * 1.1)
// }
// console.log(cart);


// напиши скрипт що порахує суму всіх парних чисел в масиві

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11]
// // 1. створити змінну тотал
// let total = 0;
// // 2. перебрати масив
// // for (let i = 0; i < numbers.length; i += 1) {
// //   console.log(numbers[i])

// //   // 3. на кожній ітерації перевірити елемент на парність (залишок від ділення)
// //   if (numbers[i] % 2 === 0) {
// //     console.log("парне!")
// //     total += numbers[i];
// //     // 4. якщо парне - додаємо в тотал
// //   }
// // }

// // console.log('total -', total); 

// // або

// // for (const number of numbers) {
// //   console.log(number)
// //   if (number % 2 === 0) {
// //     console.log("парне!")
// //     total += number;
// //   }
// // }

// // console.log('total -', total);

// //  або логіка від зворотнього, найкраща і найалгоритмічніша

// for (const number of numbers) {
//   if (number % 2 !== 0) {
//     console.log('цю дію виконувати непотрібно')
//     continue;
//   }

//   console.log(`${number} - парне!!!`)
//   total += number;
// }

// console.log('total -', total);

// знайти найменше число в циклі

// const numbers = [58, 16, 79, 14, 2, 18];
// // let smallestNumber = numbers[0];

// // for (const number of numbers) {
// //   if (number < smallestNumber) {
// //     smallestNumber = number;
// //   }
// // }

// // console.log(smallestNumber);

// // знайти найбільше число в циклі
// let biggestNumber = numbers[0];

// for (const number of numbers) {
//   if (number > biggestNumber) {
//     biggestNumber = number;
//   }
// }

// console.log(biggestNumber);

//щоб зшити елементи масиву, розділяючи їх необхідним по тз символом

// const friends = ['Ross', 'Monica', 'Rachel', 'Joey']
// const string = friends.join(', ');
// console.log(string);