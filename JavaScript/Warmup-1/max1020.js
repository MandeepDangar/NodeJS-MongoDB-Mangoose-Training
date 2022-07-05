function max1020(a, b) {
  if (a >= 10 && a <= 20 && b >= 10 && b <= 20 && a > b) {
    return a;
  } else if (a >= 10 && a <= 20 && b >= 10 && b <= 20 && b > a) {
    return b;
  } else if (a >= 10 && a <= 20) {
    return a;
  } else if (b >= 10 && b <= 20) {
    return b;
  }
  return 0;
}
console.log(max1020(11, 19));
console.log(max1020(19, 11));
console.log(max1020(11, 9));
