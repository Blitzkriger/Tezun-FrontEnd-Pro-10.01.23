// 1.Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

const array = ['q','w','e','r','t','y',1,2,3,4,5,6,7,8,9];

function avarage(arr) {

  let numbers = arr.filter(number => {
    if (!isNaN(number)) {
      return number;
    }
  })
  
  let total = numbers.reduce(function(acc,item) {
    let sum;
    return sum = acc + item;
  })

  console.log(numbers.length)

  return total / numbers.length
}

let result = avarage(array);
console.log(result)

// // 2.Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

// const firstValue = Number(prompt('Введите первое число',2));
// const secondValue = Number(prompt('Введите второе число',2));
// const calculation = prompt('Какое действие вы хотите сделать с числами (+, -, *, /, %, ^ (степень)');


// function doMath(x,znak,y) {

//   let result;

//   switch (znak) {
//     case '+':
//       result = x + y;
//       break;
//     case '-':
//       result = x - y;
//       break;
//     case '*':
//       result = x * y;
//       break;
//     case '/':
//       result = x / y;
//       break;  
//     case '%':
//       result = x % y;
//       break;
//     case '^':
//       result = x ** y;
//       break;    
// }
//   return result;
// }

// const totalResult = doMath(firstValue,calculation,secondValue);
// console.log(totalResult)

// // 3.Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

// function arrAdd() {
//   let arr = [];
//   let amount = +prompt('Введите количество массивов в основном массиве');

//   for(let i = 0; i < amount; i++) {
//       arr.push([]);

//       let amount2 = prompt(`Введите количество елементов в ${i}-ом массиве`);

//       for(let j = 0; j < amount2; j++) {
//           let elem = prompt(`Введите значение элементов для данного массива`);
//           arr[i].push([elem]);
//       }
//   }

//   console.log(arr);
// }

// arrAdd();

// // 4.Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

// const word = prompt('Напишите слово');
// const deleteElement = prompt('Какие буквы хотите удалить?');

// function foo(input, letters) {
//   return input.split('').map((letter) => letters.includes(letter) ? '' : letter).join('')
// }

// let action = foo(word, deleteElement)
// console.log(action)
