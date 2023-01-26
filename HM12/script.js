const arrayNumbers = [ 12, 3, 4, 8, 1, 2, 9, 5, 6, 7];

function compareNumbers(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

arrayNumbers.sort(compareNumbers);

console.log(arrayNumbers);

arrayNumbers.splice(1,3);
console.log(arrayNumbers);
