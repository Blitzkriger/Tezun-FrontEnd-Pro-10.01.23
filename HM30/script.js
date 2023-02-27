class SuperMath {
  check(obj) {
    const { X, Y, znak } = obj;

    let result = 0;

    switch (znak) {
      case "+":
        result = X + Y;
        break;
      case "-":
        result = X - Y;
        break;
      case "*":
        result = X * Y;
        break;
      case "/":
        result = X / Y;
        break;
      case "%":
        result = X % Y;
        break;
      default:
        alert(`Такого математического знака как ${znak} не существует`);
        return this.input();
    }
    
    const isSureOfChoise = confirm(`Уверены в математическом действии ${X} ${znak} ${Y}?`);

    if (isSureOfChoise === false) {
      return this.input();
    } else {
      alert(`Результат равен: ${result}`);
    }
  }

  input() {
    const X = Number(prompt(`Введите первое число:`));
    const Y = Number(prompt(`Введите второе число:`));
    const znak = prompt(`Введите действие (+, -, /, *, %):`);
    this.check({ X, Y, znak });
  }
}

const obj = { X: 12, Y: 3, znak: "/" };
const p = new SuperMath();
p.check(obj);
