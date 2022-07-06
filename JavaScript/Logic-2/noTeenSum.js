function noTeenSum(a, b, c) {
  return teenSum(a) + teenSum(b) + teenSum(c);
}
function teenSum(n) {
  if (n === 15 || n === 16) {
    return n;
  } else if (n >= 13 && n <= 19) {
    return 0;
  }
  return n;
}

console.log(noTeenSum(1, 2, 3));
