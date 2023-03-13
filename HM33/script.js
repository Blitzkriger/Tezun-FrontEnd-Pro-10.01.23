// 1.Реализовать функцию-генератор которая отдаст 10 рандомных чисел в диапазоне переданном в аргументах в ней.

function* generateRandomNumbers (minNum,maxNum) {
  for (let i = 0; i < 10; i++) {
    yield Math.floor(Math.random() * (minNum - maxNum) + maxNum);
  }
}

const generate = generateRandomNumbers(0,100);
for (let number of generate) {
  console.log(number);
}

// 2.Создать свой распорядок дня с помощью async await ( тоесть мы должны "подождать" выполнение асинхронной функции brushTeeth перед тем как приступать к выполнению следующей асинхронной функции)

function delay(ms) {
  return new Promise(function(resolve) {
    setTimeout(resolve, ms);
  });
}

async function wakeUp() {
  await delay(500);
  console.log('Wake up');
  await delay(1000);
  console.log('Take a shower');
  await delay(1500);
  console.log('Have breakfast');
  await delay(2000);
  console.log('Go to work');
  await delay(2500);
  console.log('Learn JS');
}

wakeUp();

