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

// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line

//   let total;

//   for (let i = 1; i <= message.split(" ").length; i += 1) {
//    total = i
//   }

//   return total * pricePerWord
//   // Change code above this line
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10))
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20))
// console.log(calculateEngravingPrice("Web-development is creative work", 40))

// function makeStringFromArray(array, delimiter) {
//   let string
//   // Change code below this line
// string = array.join(delimiter)
//   // Change code above this line
//   return string
// }

// console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "))
// console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""))

// function slugify(title) {
//   // Change code below this line
//   // return Array.from(title).join('').toLowerCase().replaceAll(" ", "-")

//   const slug = title.toLowerCase(title).split(' ')

// console.log(slug.join('-'))

//   // Change code above this line
// }
// console.log(slugify("Arrays for begginers"))
// console.log(slugify("English for developer"))
// console.log(slugify("Ten secrets of JavaScript"))
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"))

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   let newArray = firstArray.concat(secondArray);

//   return newArray.length > maxLength ? newArray.slice(0, maxLength) : newArray
//   // Change code above this line
// }
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3))
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4) )

// function calculateTotal(number) {
//   // Change code below this line
//   let sum = 0;

//   for (let i = 0; i <= number; i += 1){
//     sum += i

//   }
//      return sum
//   // Change code above this line
// }
// console.log(calculateTotal(1))
// console.log(calculateTotal(3))
// console.log(calculateTotal(7))
// console.log(calculateTotal(18))
// console.log(calculateTotal(24))

// function calculateTotalPrice(order) {
//   let total = 0
//   // Change code below this line
//   for (let i = 0; i < order.length; i += 1){
//     total += order[i];
//   }
//   // Change code above this line
// return total
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]))
// console.log(calculateTotalPrice([164, 48, 291]))
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]))


// function calculateTotalPrice(order) {
//   let total = 0

//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i]
//   }
//   return total
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]))
// console.log(calculateTotalPrice([164, 48, 291]))
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]))

// function findLongestWord(string) {

//   const words = string.split(" ")
//   let longestWord = words[0];

//   for (let word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word
//     }
//   }
//   return longestWord

// }
  


// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))
// console.log(findLongestWord("Google do a roll"))
// console.log(findLongestWord("May the force be with you"))

// const fn = function () {
// console.log(arguments)
// }
// fn(1, 2, 3)
// fn(1, 2, 3, 4, 5)
// fn(1, 2, 3, 4, 5, 6, 7)


// function createArrayOfNumbers(min, max) {
//   const numbers = []
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i)
// }
//   // Change code above this line
//   return numbers
// }
// console.log(createArrayOfNumbers(1, 3))
// console.log(createArrayOfNumbers(14, 17))
// console.log(createArrayOfNumbers(29, 34))

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment){
//   keys.push(key)
//   values.push(apartment[key])
// }
// console.log(keys)
//   console.log(values)

// const keys = []
// const values = []
// const advert = {
//   service: "apt",
// }
// const apartment = Object.create(advert)
// apartment.descr = "Spacious apartment in the city center"
// apartment.rating = 4
// apartment.price = 2153

// for (const key in apartment) {
//   // Change code below this line
//   if (apartment.hasOwnProperty(key)){
//     keys.push(key);
//     values.push(apartment[key]);
//   }

//     }
//   // Change code above this line

// console.log(keys);
// console.log(values)

// function countProps(object) {
//   let propCount = 0
//   // Change code below this line
//   for (const key in object)
//     if (object.hasOwnProperty(key))
//     propCount += 1
//   // Change code above this line
//   return propCount
// }
// console.log(countProps({}))
// console.log(countProps({ name: "Mango", age: 2 }))
// console.log(countProps({mail: "poly@mail.com", isOnline: true, score: 500}))

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// }
// const values = []
// // Change code below this line
// const keys = Object.keys(apartment) 
// console.log(keys)

// for (const key of keys) {
// values.push(apartment[key])
// }

// console.log(values)

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0
//   let keysOfObject = Object.keys(object);

//   for (const key of keysOfObject) {
//   propCount += 1
// }

//   // for (const key in object) {
//   //   if (object.hasOwnProperty(key)) {
//   //     propCount += 1
//   //   }
//   // }



//   return propCount
//   // Change code above this line
// }
// console.log(countProps({}))
// console.log(countProps({ name: "Mango", age: 2 }))
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }))

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// }
// // Change code below this line
// const keys = Object.keys(apartment)
// const values = Object.values(apartment)

// console.log(keys)
// console.log(values)

// function countTotalSalary(salaries) {
//   let totalSalary = 0
//   // Change code below this line
//   const valuesOfSalaries = Object.values(salaries);
//   console.log(valuesOfSalaries)

//   for (const value of valuesOfSalaries) {
//     totalSalary += value
//   }
//   // Change code above this line
//   return totalSalary
// }
// console.log(countTotalSalary({}))
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }))
// console.log(countTotalSalary({kiwi: 200, poly: 50, ajax: 150}))

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb)

// }

// console.log(hexColors)
// console.log(rgbColors)


// const products = [
//   {name: "Radar", price: 1300, quantity: 4},
//   {name: "Scanner", price: 2700, quantity: 3},
//   {name: "Droid", price: 400, quantity: 7},
//   {name: "Grip", price: 1200, quantity: 9},
// ]

  
// function getProductPrice(productName) {


//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//     return null
//   }

// console.log(getProductPrice("Radar"))
// console.log(getProductPrice("Grip"))
// console.log(getProductPrice("Scanner"))
// console.log(getProductPrice("Droid"))
// console.log(getProductPrice("Engine"))

const products = [
  {name: "Radar", price: 1300, quantity: 4},
  {name: "Scanner", price: 2700, quantity: 3},
  {name: "Droid", price: 400, quantity: 7},
  {name: "Grip", price: 1200, quantity: 9},
]
console.table(products)
function getAllPropValues(propName) {
}

console.log(getAllPropValues("name"))
console.log(getAllPropValues("quantity"))
console.log(getAllPropValues("price"))
console.log(getAllPropValues("category"))