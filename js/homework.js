// Change code below this line

// const pricePerDroid = 800
// const orderedQuantity = 6
// const deliveryFee = 50
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee

// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`

// console.log(totalPrice)
// console.log(message)

// productName = 'Repair droid'
// pricePerItem = '3500'

// console.log(productName);
// console.log(pricePerItem)

// let topSpeed = 160;
// let distance = 617.54;
// let login = "mango935";
// const isOnline = true;
// const isAdmin = false;

// const pricePerItem = 3500;
// const orderedQuantity = 4;
// const totalPrice = pricePerItem * orderedQuantity;

// console.log(pricePerItem)
// console.log(orderedQuantity)
// console.log(totalPrice)

// function sayHi() {
//   console.log("Hello, this is my first function!")
// }

// sayHi()

// function add(a, b, c) {
//     console.log(`Addition result equals ${a + b + c}`)
// }

// add(15, 27, 10)
// add(10, 20, 30)
// add(5, 10, 15)

// Функція makeMessage(name, price) складає і повертає повідомлення про покупку.
// Вона оголошує два параметри, значення яких будуть задаватися під час її виклику.
// - name - назва товару
// - price - ціна товару
// Доповни код функції таким чином, щоб у змінну message записувався рядок
// "You picked <product name>, price per item is <product price> credits",
//   де < product name > і < product price > - це значення параметрів name
//   і price.Використовуй синтаксис шаблонних рядків.

// message1(makeMessage('Radar', 6150));
// makeMessage('Scanner', 3500)
// makeMessage('Reactor', 8000)
// makeMessage('Engine', 4070)
// let message = `You picked ${name}, price per item ${price} credits.`
// return message
// }

// makeMessage('Radar', 6150);
// makeMessage('Scanner', 3500)
// makeMessage('Reactor', 8000)
// makeMessage('Engine', 4070)

// Задача
// Напиши скрипт вибору вартості готелю по кількості зірок
// 1 - 20дол, 2 - 30 дол, 3 - 50 дол, 4 - 70 дол, 5 - 120 дол
// Якщо в змінній stars щось окрім чисел 1-5, виведи строку "Такого типу готелю немає"

// const stars = 8
// let price

// if (stars === 1) {
//   price = 20;
// } else if (stars === 2) {
//   price = 30;
// } else if (stars === 3) {
//   price = 50;
// } else if (stars === 4) {
//   price = 70;
// } else if (stars === 5) {
//   price = 120;
// } else {
//   console.log("Такого типу готелю немає")
// }

// switch (stars) {
//   case 1:
//     price = 20;
//     break;
//   case 2:
//     price = 30;
//     break;
//   case 3:
//     price = 50;
//     break;
//   case 4:
//     price = 70;
//     break;
//   case 5:
//     price = 120;
//     break;
//   default:
//     console.log("Такого типу готелю немає")
// }

// console.log(price)

// function checkStorage(available, ordered) {
//   let message
//   // Change code below this line
//   if (ordred = 0) {
//     message = "There are no products in the order!";
//   } else if (ordered > available) {
//     message = "Your order is too large, there are not enough items in stock!"
//   } else {
//     message = "The order is accepted, our manager will contact you"
//   }
//   // Change code above this line
//   return message
// }

// if (ordred = 0) {
//   message = "There are no products in the order!";
// } else if (ordered > available) {
//   message = "Your order is too large, there are not enough items in stock!"
// } else {
//   message = "The order is accepted, our manager will contact you"
// }

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0
//   const BRONZE_DISCOUNT = 0.02
//   const SILVER_DISCOUNT = 0.05
//   const GOLD_DISCOUNT = 0.1
//   let discount

//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT
//   } else if (totalSpent >= 20000) {
//     discount = SILVER_DISCOUNT
//   } else if (totalSpent >= 5000) {
//     discount = BRONZE_DISCOUNT
//   } else {
//     discount = SILVER_DISCOUNT
//   }

//   return discount
// }

// function getSubscriptionPrice(type) {
//   let price
//   // Change code below this line

//   switch (
//     type // Change this line
//   ) {
//     case "starter": // Change this line
//       price = 0 // Change this line
//       break

//     case "professional": // Change this line
//       price = 20 // Change this line
//       break

//     case "organization": // Change this line
//       price = 50 // Change this line
//       break
//   }

//   // Change code above this line
//   return price
// }

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam"
//   let message
//   // Change code below this line

//   switch (password) {
//     case null:
//       message = "Canceled by user!"
//       break

//     case ADMIN_PASSWORD:
//       message = "Welcome!"
//       break

//     default:
//       message = "Access denied, wrong password!"
//   }

//   // Change code above this line
//   return message
// }

// Функція getShippingCost(country) повинна перевіряти можливість доставки товару в країну користувача
//   (параметр country) і повертати повідомлення про результат, що зберігається у змінній message.
//     Обов'язково використовуй інструкцію switch.

// Формат рядка, що повертається "Shipping to <country> will cost <price> credits",
//   де замість < country > і < price >, необхідно підставити відповідні значення.

// Список країн і вартість доставки:

// China - 100 кредитів
// Chile - 250 кредитів
// Australia - 170 кредитів
// Jamaica - 120 кредитів
// Зі списку видно, що доставка можлива не скрізь.Якщо зазначена країна відсутня у списку,
//   то функція повинна повернути рядок "Sorry, there is no delivery to your country"

// function getShippingCost(country) {
//   let message

//   // Change code below this line
//   switch (country) {
//     case "China":
//       price = 100;
//       message = `Shipping to ${country} will cost ${price} credits`
//       break;

//     case "Chile":
//       price = 250;
//       message = `Shipping to ${country} will cost ${price} credits`
//       break;

//     case "Australia":
//       price = 170;
//       message = `Shipping to ${country} will cost ${price} credits`
//       break;

//     case "Jamaica":
//       price = 120;
//       message = `Shipping to ${country} will cost ${price} credits`
//       break;

//     default:
//       message = "Sorry, there is no delivery to your country"
//   }

//   // Change code above this line
//   return message
// }

// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   console.log(message);
// }
// getNameLength('Daria')
// getNameLength('Bob')

// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line

//   // const words = message;
//   const messageAsArray = message.split(" ");
//   console.log(messageAsArray.length * pricePerWord);

//   // words.split()

//   // Change code above this line
// }

// calculateEngravingPrice(
//   calculateEngravingPrice("JavaScript is in my blood", 10)
// )

// function makeStringFromArray(array, delimiter) {
//   let string
//   // Change code below this line
//   string = array.join(delimiter)

//   // Change code above this line
//   console.log(string);
//   return string;
// }

// makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ")
// makeStringFromArray(["M", "a", "n", "g", "o"], "")
// makeStringFromArray(["top", "picks", "for", "you"], "_")

// function slugify(title) {
//   // Change code below this line
//   const slug = title.toLowerCase(title).split(" ")

//     // .replaceAll(" ", "-")

// console.log(slug.join("-"))
//   return slug;
//   // Change code above this line
// }

// slugify("Arrays for begginers")
// slugify("English for developer")
// slugify("Ten secrets of JavaScript")
// slugify("How to become a JUNIOR developer in TWO WEEKS")

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2)
// console.log(firstTwoEls);
// const nonExtremeEls = fruits.slice(1 , fruits.length - 1);
// console.log(nonExtremeEls);
// const lastThreeEls = fruits.slice(-3);
// console.log(lastThreeEls);

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line

// console.log(allClients);

// function makeArray(firstArray, secondArray, maxLength) {
//   const newArray = firstArray.concat(secondArray)

//   if (newArray.length >= maxLength) {
//    console.log(newArray.slice(0, maxLength));
//     return newArray.slice(0, maxLength)
//       ;
//   }

// }
// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)
// makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)
// makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   console.log(i);
// }

// function calculateTotal(number) {
//   // Change code below this line
// let sum = 0
// for (let i = 1; i <= number; i += 1) {
//   sum += i
// }
// return sum

//   // Change code above this line
// }

// console.log(calculateTotal(1))
// console.log(calculateTotal(3))
// console.log(calculateTotal(7))
// console.log(calculateTotal(18))

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// function calculateTotalPrice(order) {
//   let total = 0
//   // Change code below this line
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i]
//   }
//   // Change code above this line
//   return total
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]))
// console.log(calculateTotalPrice([164, 48, 291]))
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]))
// const word = "home"
// console.log(word.length)

// function findLongestWord(string) {
//   // Change code below this line
//   const words = string.split(" ")
//   let longestWord = ""

//   // Ітеруємося по кожному слову в масиві та знаходимо найдовше слово
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > longestWord.length) {
//       longestWord = words[i]
//     }
//   }

//   return longestWord
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))
// console.log(findLongestWord("Google do a roll"))
// console.log(findLongestWord("May the force be with you"))

// const genres = ["Jazz", "Blues"]
// genres.push("Rock-N-Roll")

// // console.log(genres[genres.length - 1])


// console.log(genres.splice(0, 1))



// const values = '8, 11'
// const result = values.split(" ")
// console.log(result)


// function createArrayOfNumbers(min, max) {
//   const numbers = []
//   // Change code below this line
//   for (let i = min; i <= max; i++) {
//     numbers.push(i);
//   }
//   // Change code above this line
//   return numbers
// }

// function filterArray(numbers, value) {
//   // Change code below this line
//   let filteredNumbers = []

//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       filteredNumbers.push(numbers[i])
//     }
//     // Change code above this line
//   }

//   return filteredNumbers
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3))
// filterArray([1, 2, 3, 4, 5], 4)
// filterArray([1, 2, 3, 4, 5], 5)
// filterArray([12, 24, 8, 41, 76], 38)
// filterArray([12, 24, 8, 41, 76], 20)

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit) ? true : false; // Change this line
// }

// console.log(checkFruit("plum"))
// console.log(checkFruit("mandarin"))


// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (i of order) {
//   total += i
//   }
//   // Change code above this line
//   return total
//   // for (let i = 0; i < order.length; i += 1) {
//   //   total += order[i]
//   // }

//   // Change code above this line
//   return 
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]))
// console.log(calculateTotalPrice([164, 48, 291]))

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = []

//   // for (let i = 0; i < numbers.length; i += 1) {
//   for (const number of numbers) {

//     if (number > value) {
//       filteredNumbers.push(number)
//     }
//   }

//   return filteredNumbers
//   // Change code above this line
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3))

// function getEvenNumbers(start, end) {
//   // Change code below this line
//   const evenNumbers = []

//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       evenNumbers.push(i)
//     }
//   }
//   // Change code above this line
//   return evenNumbers
//   // Change code above this line
// }

// console.log(getEvenNumbers(2, 5))
// console.log(getEvenNumbers(3, 11))
// console.log(getEvenNumbers(6, 12))

// function includes(array, value) {
//   // Change code below this line
//   let result = array.includes(value); 
  
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] === value) {
//       return result = true;
//     }
//   }
//   // Change code above this line
// }
// console.log(includes([1, 2, 3, 4, 5], 3))