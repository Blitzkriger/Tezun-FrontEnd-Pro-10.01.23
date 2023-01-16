const firstEnteredNumber = prompt('Введите первое число!', 2);
const secondEnteredNumber = prompt('Введите второе число!', 2);

const sumValue = Number(firstEnteredNumber) + Number(secondEnteredNumber);
const deductionValue = Number(firstEnteredNumber) - Number(secondEnteredNumber);
const multiplyValue = Number(firstEnteredNumber) * Number(secondEnteredNumber);
const devideValue = Number(firstEnteredNumber) / Number(secondEnteredNumber);

alert(`${firstEnteredNumber} + ${secondEnteredNumber} = ${sumValue}`);
alert(`${firstEnteredNumber} - ${secondEnteredNumber} = ${deductionValue}`);
alert(`${firstEnteredNumber} * ${secondEnteredNumber} = ${multiplyValue}`);
alert(`${firstEnteredNumber} / ${secondEnteredNumber} = ${devideValue}`);


// if (typeof(Number(firstEnteredNumber)) === `number` && typeof(Number(secondEnteredNumber)) === `number`) {

//     const sumValue = Number(firstEnteredNumber) + Number(secondEnteredNumber);
//     const deductionValue = Number(firstEnteredNumber) - Number(secondEnteredNumber);
//     const multiplyValue = Number(firstEnteredNumber) * Number(secondEnteredNumber);
//     const devideValue = Number(firstEnteredNumber) / Number(secondEnteredNumber);

//     alert(`${firstEnteredNumber} + ${secondEnteredNumber} = ${sumValue}`);
//     alert(`${firstEnteredNumber} - ${secondEnteredNumber} = ${deductionValue}`);
//     alert(`${firstEnteredNumber} * ${secondEnteredNumber} = ${multiplyValue}`);
//     alert(`${firstEnteredNumber} / ${secondEnteredNumber} = ${devideValue}`);

// } else {
    
//     alert('WTF? Написали же введите число!!!')
    
// }

