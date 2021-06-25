// const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// console.log(daysOfWeek);

// daysOfWeek.push("sun");
// console.log(daysOfWeek);

//Object
// const player = {
//   name: "ye",
//   points: 10,
//   fat: true,
// };
// console.log(player);
// console.log(player.name);

// player.fat = false;
// console.log(player);
// player.lastName = "potato";
// console.log(player);
// player.points = player.points + 15;
// console.log(player);

//반복해서 사용할 수 있는 코드조각
// function

// function sayHello(userName, age) {
//   console.log("Hello my name is " + userName + " and I'm " + age);
// }
// sayHello("ye", 10);

// function divide(a, b) {
//   console.log(a / b);
// }

// divide(10, 2);

// const player = {
//   name: "ye",
//   sayHello: function (otherPersonsName) {
//     console.log("Hello " + otherPersonsName + " nice to meet you!");
//   },
// };

// player.sayHello("eun");
// player.sayHello("nico");
// player.sayHello("console");

//실습
// const calculator = {
//   add: function (a, b) {
//     console.log(a + b);
//   },
//   minus: function (a, b) {
//     console.log(a - b);
//   },
//   times: function (a, b) {
//     console.log(a * b);
//   },
//   divide: function (a, b) {
//     console.log(a / b);
//   },
//   power: function (a, b) {
//     console.log(a ** b);
//   },
// };
// calculator.add(10, 2);
// calculator.minus(10, 2);
// calculator.times(10, 2);
// calculator.divide(10, 2);
// calculator.power(10, 2);

// function 활용
// const calculator = {
//   plus: function (a, b) {
//     return a + b;
//   },
//   minus: function (a, b) {
//     return a - b;
//   },
//   times: function (a, b) {
//     return a * b;
//   },
//   divide: function (a, b) {
//     return a / b;
//   },
//   power: function (a, b) {
//     return a ** b;
//   },
// };
// const plusResult = calculator.plus(2, 3);
// const minusResult = calculator.minus(plusResult, 10);
// const timesResult = calculator.times(10, minusResult);
// const divideResult = calculator.divide(timesResult, plusResult);
// const powerResult = calculator.power(divideResult, minusResult);

// console.log(powerResult);

const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
  console.log("Please write a real positive number");
} else if (age < 18) {
  console.log("You are too young.");
} else if (age >= 18 && age <= 50) {
  console.log("you can drink");
} else if (age > 50 && age <= 80) {
  console.log("You should exercise");
} else if (age === 100) {
  console.log("wow you are wise");
} else if (age > 80) {
  console.log("You can do whatever you want");
}
