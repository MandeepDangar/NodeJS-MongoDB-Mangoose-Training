function lastDigit(a, b, c) {
  if (a % 10 === b % 10) {
    return true;
  }
  return false;
}

console.log(lastDigit(7, 17));
console.log(lastDigit(6, 17));
console.log(lastDigit(3, 113));
