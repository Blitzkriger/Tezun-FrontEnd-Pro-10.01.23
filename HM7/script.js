const mathEnteredAction = prompt('Какое математическое действие вы хотите сделать? add,sub,mult,div?');
const firstEnteredNumber = Number(prompt('Введите первое число.', 10));
const secondEnteredNumber = Number(prompt('Введите второе число.', 2));

if (mathEnteredAction == 'add') {

    const addValue = firstEnteredNumber + secondEnteredNumber;
    alert(`${firstEnteredNumber} + ${secondEnteredNumber} = ${addValue}`)

} else if (mathEnteredAction == 'sub') {

    const subValue = firstEnteredNumber - secondEnteredNumber;
    alert(`${firstEnteredNumber} - ${secondEnteredNumber} = ${subValue}`)

} else if (mathEnteredAction == 'mult') {

    const multValue = firstEnteredNumber * secondEnteredNumber;
    alert(`${firstEnteredNumber} * ${secondEnteredNumber} = ${multValue}`)

} else if (mathEnteredAction == 'div') {

    const divValue = firstEnteredNumber / secondEnteredNumber;
    alert(`${firstEnteredNumber} / ${secondEnteredNumber} = ${divValue}`)

} else {

    alert('Что-то пошло не так')
    
}