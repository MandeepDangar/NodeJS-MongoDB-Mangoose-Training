function count7(n) {
  if (n === 7) {
    return 1;
  }
  if (n <= 0) {
    return 0;
  }
  let rem = n % 10;
  if (rem === 7) {
    return 1 + count7(Math.floor(n / 10));
  }
  return count7(Math.floor(n / 10));
}
console.log(count7(123));
