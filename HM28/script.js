// 1.Создать функцию которая будет принимать миллисекунды и вернет true или false в зависимости от того сегодня ли то число которое было передано

function getToday(milliseconds) {
  const today = new Date();
  const notToday = new Date(milliseconds);

  if (today.getFullYear() === notToday.getFullYear() && today.getMonth() === notToday.getMonth() && today.getDate() === notToday.getDate()) {
    return true
  } else {
    return false
  }
}

const date1 = Date.now();
const date2 = new Date('2022-02-22').getTime();

console.log(getToday(date1));
console.log(getToday(date2));

// 2.Создать функцию которая вернет дату и время в формате 13.10.2022 13:13 принимая миллисекунды

function getDateAndTime(milliseconds) {
  const date = new Date(milliseconds);
  const year = date.getFullYear();
  let mounth = doVarification(date.getMonth() + 1);
  let day = doVarification(date.getDate());
  let hour = doVarification(date.getHours());
  let minute = doVarification(date.getMinutes());

  return `${day}.${mounth}.${year} ${hour}:${minute}`
}

function doVarification(value) {
  if (value < 10) {
    return value = '0' + value
  } else {
    return value
  }
}

const generateDate = getDateAndTime(1677093059877);
console.log(generateDate);

// 3.Создать функцию которая принимает миллисекунды и вернет количество времени которое прошло или должно пройти с текущего момента.

function getMS(milliseconds) {
  const time = new Date(milliseconds) - Date.now();
  return time
}

console.log(getMS(2000000000000));

