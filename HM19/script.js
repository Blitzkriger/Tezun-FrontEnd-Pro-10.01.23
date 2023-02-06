function getSum() {
  let sum = 0 
  return function(num) {
    sum += num
    console.log(sum)
    return sum
  }
}
let sum = getSum();
sum(3);
sum(5);
sum(20);











