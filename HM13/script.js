const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
console.log(arr)

// 1.Знайти суму та кількість позитивних елементів.

let positiveArr = arr.filter(item => item > 0);

console.log(positiveArr);
console.log(`В данном массиве ${positiveArr.length} положительных элемента`);

let result = positiveArr.reduce((sum, current) => sum + current, 0);

console.log(`Их сума равна: ${result}`);

console.log(' ');

// 2.Знайти мінімальний елемент масиву та його порядковий номер.

let minArrNumber = arr[0];

 arr.forEach(function (item) {
  if (item < minArrNumber) {
    minArrNumber = item;
  }
})

console.log(`Минимальный елемент: ${minArrNumber}`);

let arrMinElemIndex = arr.indexOf(minArrNumber);
console.log(`Его инндекс: ${arrMinElemIndex}`);


console.log(' ');


// 3.Знайти максимальний елемент масиву та його порядковий номер.

let maxArrNumber = arr[0];

 arr.forEach(function (item) {
  if (item > maxArrNumber) {
    maxArrNumber = item;
  }
})

console.log(`Максимальный элемент: ${maxArrNumber}`);

let arrMaxElemIndex = arr.indexOf(maxArrNumber);
console.log(`Его индекс: ${arrMaxElemIndex}`);


console.log(' ');

// 4.Визначити кількість негативних елементів.

let negativeArr = arr.filter(item => item < 0);

console.log(negativeArr);
console.log(`В данном массиве ${negativeArr.length} отрицательных элементов`);

console.log(' ');

// 5.Знайти кількість непарних позитивних елементів.

let positiveUnpairedArr = positiveArr.filter(item => item % 2 );

console.log(positiveUnpairedArr);
console.log(`Количество непарных позитивных элементов: ${positiveUnpairedArr.length}`);

console.log(' ');

// 6.Знайти кількість парних позитивних елементів.

let positivePairedArr = positiveArr.filter(function(item){
  return item % 2 === 0});

console.log(positivePairedArr);
console.log(`Количество парных позитивных элементов: ${positivePairedArr.length}`);

console.log(' ');

// 7.Знайти суму парних позитивних елементів.

let sumPairedPositiveArr = positivePairedArr.reduce(function(sum, current) {
  return sum += current;
});

console.log(`Сумма парных позитивных элементов: ${sumPairedPositiveArr}`);

console.log(' ');

// 8.Знайти суму непарних позитивних елементів.

let sumUnpairedPositiveArr = positiveUnpairedArr.reduce(function(sum, current) {
  return sum += current;
});

console.log(`Сумма парных позитивных элементов: ${sumUnpairedPositiveArr}`);

console.log(' ');

// 9.Знайти добуток позитивних елементів.

let sumPositiveArr = positiveArr.reduce(function(sum, current) {
  return sum *= current;
});

console.log(`Добуток парных позитивных элементов: ${sumPositiveArr}`);

console.log(' ');

// 10.Знайти найбільший серед елементів масиву, остальні обнулити.

let maxValueNumberArr = arr[0];

for (let i = 0; i < arr.length; i++) {
  if(arr[i] > maxValueNumberArr) {
    maxValueNumberArr = arr[i];
    if (maxArrNumber > maxValueNumberArr) {
      arr[i]= 0;
    }
  } else {
    arr[i] = 0;
  }

}

console.log(arr);


