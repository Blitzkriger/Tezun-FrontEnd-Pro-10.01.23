class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getInfo() {
    console.log(`${this.name}, Возраст: ${this.age}`);
  }
}

class Car extends Person {
  constructor(brand, model, year, licensePlate, owner) {
    super(owner.name, owner.age);
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.licensePlate = licensePlate;

    if (owner.age >= 18) {
      this.owner = owner;
    }
  }

  getInfo() {
    console.log(`Марка: ${this.brand}, Модель: ${this.model}, Год выпуска: ${this.year}, Номерной знак: ${this.licensePlate}`);
    if(this.owner) {
    console.log(`Владелец:`);
    super.getInfo();
    } else {
      console.log('Машина не имеет владельца')
    }
  }
}

const person1 = new Person('Денис', 32);
const person2 = new Person('Дима', 17);


const car1 = new Car('Фольцваген', 'Пассат', 2017, 'ВН 43-67 МО', person1);
const car2 = new Car('Ауди', 'RS7', 2023, 'ВН 55-54 OB', person2);


car1.getInfo();
car2.getInfo();











