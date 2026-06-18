// 基礎問題
// Q1
let name = 'たつき';
let age = 27;
let greet = '私の名前は'+name+'です。年齢は' + age+ 'です。'
console.log(greet);

// Q2
let languages = ["JavaScript", "PHP", "Ruby", "Python", "Go"];
let js = languages[0];
let python = languages[3];
let message = `私の好きな言語は${js}です。次は${python}を勉強してみたいです。`;
console.log(message);

// Q3
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);

// Q4
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];
console.log(playerList[1].favorites);

// Q5
let totalAge = playerList[0].age + playerList[1].age + playerList[2].age;
let averageAge = totalAge / playerList.length;
console.log(averageAge);

// Q6
function sayHello(){
  console.log('Hello')
}
sayHello();

let sayWorld = function(){
  console.log('World')
}
sayWorld();

// Q7
user.birthday = '2000-09-27';
user.sayHello = function () {
  console.log("Hello!");
};
user.sayHello();

// Q8
let calc = {};
// 足し算（7になるように）
calc.add = function (x, y) {
  console.log(x + y);
};
calc.add(3, 4);
// 引き算（10になるように）
calc.subtract = function (x, y) {
  console.log(x - y);
};
calc.subtract(15, 5);
// 掛け算（49になるように）
calc.multiply = function (x, y) {
  console.log(x * y);
};
calc.multiply(7, 7);
// 割り算（5になるように）
calc.divide = function (x, y) {
  console.log(x / y);
};
calc.divide(25, 5);

// Q9
function remainder(x,y){
  return x % y;
}
const result = remainder(5,3);
console.log(x + ' を ' + y + ' で割った余りは ' + result + ' です。');


// Q10
// function foo() {
//   let x = 1;
// }
// console.log(x);

// 関数の中で定義した変数は、ローカル変数と呼ばれ、関数の中でしか参照することができない。今回のxはローカル変数となるため関数内だけスコープが有効となっているからエラーが出てしまう。


// 応用問題
// Q1
const randomInt = Math.floor(Math.random() * 10);
console.log(randomInt);

// Q2
setTimeout(function () {
  console.log('Hello World!');
}, 3000);

// Q3
let num = 0;
if (num > 0) {
  console.log('num is greater than 0');
} else if (num < 0){
  console.log ('num is less than 0');
} else {
  console.log ('num is 0');
}

// Q4
let numbers = [];
for (let i = 0; i < 100; i++) {
  numbers.push(i);
}
console.log(numbers);

// Q5
let mixed = [4, '2', 5, '8', '9', 0, 1];
for (let i = 0; i < mixed.length; i++) {
  if (typeof mixed[i] !== 'number') {
    console.log('not number');
  } else if (mixed[i] % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}