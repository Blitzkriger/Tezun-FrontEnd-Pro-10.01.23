const mathEnteredAction = prompt('Какое математическое действие вы хотите сделать? add(+),sub(-),mult(*),div(/)?');
const firstEnteredNumber = Number(prompt('Введите первое число.', 10));
const secondEnteredNumber = Number(prompt('Введите второе число.', 2));

if (mathEnteredAction == 'add' || mathEnteredAction == '+') {

    const addValue = firstEnteredNumber + secondEnteredNumber;
    alert(`${firstEnteredNumber} + ${secondEnteredNumber} = ${addValue}`)

} else if (mathEnteredAction == 'sub' || mathEnteredAction == '-') {

    const subValue = firstEnteredNumber - secondEnteredNumber;
    alert(`${firstEnteredNumber} - ${secondEnteredNumber} = ${subValue}`)

} else if (mathEnteredAction == 'mult' || mathEnteredAction == '*') {

    const multValue = firstEnteredNumber * secondEnteredNumber;
    alert(`${firstEnteredNumber} * ${secondEnteredNumber} = ${multValue}`)

} else if (mathEnteredAction == 'div' || mathEnteredAction == '/') {

    const divValue = firstEnteredNumber / secondEnteredNumber;
    alert(`${firstEnteredNumber} / ${secondEnteredNumber} = ${divValue}`)

} else {

    alert('Что-то пошло не так')
    
}