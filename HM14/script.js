const fruitsArr = ["apple", "carrot", "pear", "celery"];

fruitsArr.forEach((item) => console.log(item));

for (let fruit of fruitsArr) {
  console.log(fruit);
}
// const valueArr = Number(prompt('Введите длину массива'));

// const arr = [];

// for (let i = 0; i < valueArr; i++) {
//   const element = Number(prompt('Введите число', 3));
//   arr.push(element)
// }

// console.log(arr)

// let squadArr = arr.map(item => item ** 2);

// console.log(squadArr);

// const carArr = [['Audi', 'Lamborghini', 'Skoda'], ['Mercedes-Benz', 'Maybach', 'Smart', 'Mitsubishi']];

// carArr.forEach(concern => console.log(concern.join(',')))

// let num = 0;

// while (num < 3) {
//   console.log(`Число ${num}`);
//   num++
// }

// showMessage();

//  let showMessage = function () {
//   console.log('hi')
// }

// let userInfo = {

//   name: 'Vasia',
//   age: 45,
//   adress: {
//     city: 'Odessa'
//   }
// }

// for (const key in userInfo.adress) {
//   console.log(userInfo.adress[key]);
// }

// let user = userInfo;
// userInfo = null;
// user.showInfo();


// let userInfo = {
//   name: 'Vasia',
//   age: 30,
// }

// userInfo.name = 'Lena';
// console.log(userInfo);

// delete userInfo.name;
// console.log(userInfo);

// const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

// const maxNumber = (a, b) => {
//   return a > b ? a : b;
// },
//   minNumber = (a, b) => {
//       return a < b ? a : b
//   };

// console.log(arr.reduce(maxNumber), (arr.indexOf(76)+1));
// console.log(arr.reduce(minNumber), (arr.indexOf(-63)+1));


// console.log(Math.max(...arr), (arr.indexOf(76)+1));
// console.log(Math.min(...arr), (arr.indexOf(-63)+1));

// let arr = ['Ваня','Иштван'];
// arr.push('Оля');
// console.log(arr);
// arr.splice(1,1,'Петя');
// // console.log(newArr);
// console.log(arr);

// let newArr = arr.splice(0,1);
// console.log(newArr);
// console.log(arr);

// arr.unshift('Маша','Петя');
// console.log(arr);


// let str = 'Ваня,Иштван,Оля';

// let arr = str.split(',');
// console.log(str);
// console.log(arr)

// const obj ={};

// obj.name = 'John';
// obj.surname = 'Smith';
// console.log(obj);
// obj.name = 'Pete';
// console.log(obj);
// delete obj.name;
// console.log(obj);

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// let sum = 0;

// for (let key in salaries) {
//   console.log(key)
//   console.log(salaries[key]);

//   sum += salaries[key];

// }

// console.log(sum);

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// for (let key in menu) {
//   if (typeof menu[key] == "number") {
//     menu[key]*= 2;
//   }

//   console.log(typeof(menu[key]))
//   console.log(menu[key]);
// }

// console.log(menu)

// // multiplyNumeric(menu);

// let user = {
//   name: "John",
//   years: 30
// };

// let {name,years:age,isAdmin = false} = user;

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

let sumSalaries = function(salaries) {
  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary
  }
  return sum;
}

console.log(sumSalaries(salaries))