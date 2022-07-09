function sumDigits1(n) {
  if (n < 10) {
    return n;
  }
  let rem = n % 10;
  return rem + sumDigits1(Math.floor(n / 10));
}
console.log(sumDigits1(126));
