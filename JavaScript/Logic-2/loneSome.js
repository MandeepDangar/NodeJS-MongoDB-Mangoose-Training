function loneSum(a, b, c) {
  if (a === b && b === c && a === c) {
    return 0;
  }
  if ((a + b) / 2 === a) {
    return c;
  }
  if ((a + c) / 2 === a) {
    return b;
  }
  if ((b + c) / 2 === b) {
    return a;
  }

  return a + b + c;
}

console.log(loneSum(1, 2, 3));
