function luckySum(a, b, c) {
  if (a === 13) {
    if (b === 13) {
      return 0;
    } else if (c === 13) {
      return 0;
    } else {
      return 0;
    }
  } else if (b === 13) {
    return a;
  } else if (c === 13) {
    return a + b;
  }
  return a + b + c;
}

console.log(luckySum(1, 2, 3));
