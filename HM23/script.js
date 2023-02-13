const car = {
  drive() {
    console.log("drive");
  },
  stop() {
    console.log("stop");
  },
  openDoor() {
    console.log(`open ${this.openDoors} doors in ${this.name}`);
  },
  openDoors: 'horizontal'
};

function Auto(name) {
  this.name = name;
}

Auto.prototype = car;

const audi = new Auto("Audi");
const lambo = new Auto("Lambo");

lambo.openDoors = 'verical';

console.log(audi);
console.log(lambo)

audi.openDoor();
lambo.openDoor();





















