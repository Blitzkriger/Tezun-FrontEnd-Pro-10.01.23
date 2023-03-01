// 1.Избавится от неуникальных элементов массива

const numbersArray = [1,1,2,3,4,5,5,5,6];

const setArray = new Set(numbersArray);
const uniqueArray = new Array(...setArray);
console.log(uniqueArray);

// 2.Создать Map который будет по переданному объекту возвращать строку привествия

const userBob = {name: 'Bob'};
const userJane = {name: 'Jane'};

const mapUsers = new Map();

mapUsers.set(userBob,`Hello Bob nice to see you!`);
mapUsers.set(userJane,'How your kids doing Jane?');

function greetUser(obj) {
  const greetingUsers = mapUsers.get(obj);
  return greetingUsers;
}

console.log(greetUser(userBob));
console.log(greetUser(userJane));

// 3.Создать функцию по превращению Map в object или object в Map в зависимости от того что было передано в функцию.

function transformToMapAndObj(obj) {
  if (obj.size) {
    const newObjFromMAp = Object.fromEntries(obj);
    return newObjFromMAp
  } else {
    const myMap = new Map(Object.entries(obj));
    return myMap;
  }
}

const objExample = {
  name: 'Яблочный дедушка',
  age: 82,
};

const mapExample = new Map([
  ['name', 'Den'],
  ['age', 32],
]);

console.log(transformToMapAndObj(objExample));
console.log(transformToMapAndObj(mapExample));



