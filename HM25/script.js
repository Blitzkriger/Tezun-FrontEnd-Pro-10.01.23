class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}
  
class Flat {
  constructor() {
    this.flat = [];
  }
    
  addFlat(person) {
    this.flat.push(person);
  }
}
  
class House extends Flat {
    constructor(maxFlats) {
      super();
      this.maxFlats = maxFlats;
      this.flats = [];
    }
    
  addFlat(flat) {
    if (this.flats.length < this.maxFlats) {
      this.flats.push(flat);
    } else {
      console.log("Больше квартир не поместится");
    }
  }
}

const person1 = new Person("Valera", "male");
const person2 = new Person("Valeria", "female");
console.log(person1);
console.log(person2);

const flat1 = new Flat();
const flat2 = new Flat();

flat1.addFlat(person1);
flat2.addFlat(person2);
console.log(flat1);
console.log(flat2);

const house = new House(2);

house.addFlat(flat1);
house.addFlat(flat2);
console.log(house);
