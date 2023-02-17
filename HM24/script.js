// 1.Создать функцию которая будет принимать имя пользователя и время через которое он хочет чтоб его поприветствовали. Время пользователь хочет вводить строкой в разном формате например '10 minutes' , '20 seconds', '1 hour', '2 hours'

function greetUser() {
  const name = prompt('Как вас зовут?', 'Денис');
  const time = prompt('Через какое время хотите получить приветствие?(сек,мин,час)');
  let timeInSeconds = 0;
  if (time.includes('сек')) {
      timeInSeconds = parseInt(time);
  } else if (time.includes('мин')) {
      timeInSeconds = parseInt(time) * 60;
  } else if (time.includes('час') || time.includes('часа') || time.includes('часов')) {
      timeInSeconds = parseInt(time) * 3600;
  }
  setTimeout(() => {
      console.log(`Привет ${name}`);
  }, timeInSeconds * 1000);
}

greetUser()

// 2.Создать функцию которая будет или сериализировать или десериализировать объект в зависимости от того в какой форме он был передан

function jsonAction(obj) {
  if (typeof obj === 'object') {
      return JSON.stringify(obj);
  } else {
      return JSON.parse(obj);
  }
}

const res = jsonAction('{"a": 1}');
console.log(res);
const res2 = jsonAction({a: 1});
console.log(res2);

// 3.Создать функцию которая вернет true или false в зависимости от того что в нее передать JSON строку или обычную строку

function jsonStringAction(str) {
  try {
      JSON.parse(str);
      return true;
  } catch (err) {
      return false;
  }
}

const res3 = jsonStringAction(JSON.stringify({a: 1}))
console.log(res3)
const res4 = jsonStringAction({a: 1});
console.log(res4)
