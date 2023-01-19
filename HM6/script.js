const firstValue = prompt('Введите любое слово', 'Петя');
const secondValue = prompt('Еще разок', 'Вася');
const thirdValue = prompt('И последний раз', 'Коля');

alert(`${firstValue} ${secondValue} ${thirdValue}`); //1
// alert(firstValue.concat(secondValue).concat(thirdValue)); //2

const numberValue = 12345;
const stringValue = String(numberValue);
alert(stringValue.charAt(0) + ' ' + stringValue.charAt(1) + ' ' + stringValue.charAt(2) + ' ' + stringValue.charAt(3) + ' ' + stringValue.charAt(4));

