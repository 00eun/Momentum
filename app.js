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

const player = {
  name: "ye",
  sayHello: function (otherPersonsName) {
    console.log("Hello " + otherPersonsName + " nice to meet you!");
  },
};

player.sayHello("eun");
player.sayHello("nico");
player.sayHello("console");
