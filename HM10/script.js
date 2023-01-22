// 1.Вивести на сторінку в один рядок через кому числа від 10 до 20.

let result = '';

for(let i = 10; i <= 20; i++){
  result += `${i}${i !== 20 ? ',' : ''}`;
}

console.log(result);

console.log(' ');

// 2.Вивести квадрати чисел від 10 до 20.

let squareNumber = '';

for(let i = 10; i <= 20; i++) {
  squareNumber = squareNumber + i * i + ' ';
}

console.log(squareNumber);

console.log(' ');

// 3.Вивести таблицю множення на 7.

let multiTable = '';
const multiValue = 7;

for (let i = 1; i <=10; i++) {
  multiTable = i * multiValue;
  console.log(`${multiValue} * ${i} = ${multiTable}`);
}


console.log(' ');

// 4.Знайти суму всіх цілих чисел від 1 до 15.

let sum = 0;

for (let i = 1; i <=15; i++) {
  sum = sum + i;
  console.log(sum);
}

console.log(sum);

console.log(' ');

// 5.Знайти добуток усіх цілих чисел від 15 до 35.

let multi = 1;

for (let i = 15; i <=35; i++) {
  multi = multi * i;
  console.log(multi);
}

console.log(multi);

console.log(' ');

// 6.Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

let average = 0;

for (let i = 1; i <= 500; i++) {
  average = (average + i);
  average / 500;
}

console.log(average / 500);

console.log(' ');

// 7.Вивести суму лише парних чисел в діапазоні від 30 до 80.

let pair = 0;

for (let i = 30; i <= 80; i++) {
  if (i % 2 === 0) {
    pair = pair + i;
    console.log(pair);
  }
}
console.log(pair);

console.log(' ');

// 8.Вивести всі числа в діапазоні від 100 до 200 кратні 3.

let multiplicityOf = 0;

for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    multiplicityOf =+ `${i} `;
    console.log(multiplicityOf);
  }
}
console.log(multiplicityOf);

console.log(' ');

// 9.Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
// 10.Визначити кількість його парних дільників.
// 11.Знайти суму його парних дільників.

let naturalNumber = 100;
let devValueOfNaturalNumber = 0;
let count = 0;

for (let i = 2; i <= naturalNumber; i++) {
  if (naturalNumber % i === 0) {
    console.log(i)

    if (i % 2 === 0) {
      count ++;
      devValueOfNaturalNumber += i;
 
    }
  }
}
console.log(count);
console.log(devValueOfNaturalNumber);

console.log(' ');

// 12.Надрукувати повну таблицю множення від 1 до 10.

let fullMultiTable ='';

for (let i = 1; i <= 10; i++) {

  for (let j = 1; j <= 10; j++) {

    fullMultiTable = i * j;
    console.log(`${i} * ${j} = ${fullMultiTable}`);

  }
}




