// 1.Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).

let enumeration = '';

for (let i = 20; i <= 30; i = i + 0.5) {

  enumeration =  enumeration + i + ' ';
  
}

console.log(enumeration.trim());

console.log(' ');

// 2.Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

let dollarRate = 27;
let dollarSum = '';

for (let i = 10; i <= 100; i = i + 10) {

  dollarSum = dollarRate * i;
  console.log(`${dollarRate} * ${i} = ${dollarSum}`);

}

console.log(' ');

// 3.Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

let number = 170;
let squareNumber = '';

for (let i = 1; i <= 100; i++) {
  
  squareNumber =  i * i;

  if(number > squareNumber) {

    console.log(i);
    
  } 
}


console.log(' ');

// 4.Дане ціле число. Зясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

let fullNumber = 10;

for (let i = 2; i < fullNumber; i++) {

  if (fullNumber % i === 0) {
    
    console.log('Это число не является простым');
    break;

  } else {

    console.log('Число является простым');
    break;

  }

}

console.log(' ');

// 5.Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).


let cubeNumber = 50;
let stepenNumber = 3;

while ( cubeNumber % stepenNumber === 0){
  cubeNumber /= 3
}

if ( cubeNumber === 1) {

  console.log(`Число можно получить возведением ${stepenNumber} в степень`);

} else {

  console.log(`Число нельзя получить возведением ${stepenNumber} в степень`);

}




