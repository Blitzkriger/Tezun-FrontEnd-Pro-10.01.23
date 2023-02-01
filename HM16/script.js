// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

let array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(arr, deleteItem) {
  const startIndex = arr.indexOf(deleteItem);

  arr.splice(startIndex, 1)
}

removeElement(array, 5);
console.log(array);
