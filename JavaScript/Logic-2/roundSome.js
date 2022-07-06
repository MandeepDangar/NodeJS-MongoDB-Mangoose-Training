function roundSum(a, b, c) {
  return round10(a) + round10(b) + round10(c);
}
function round10(n) {
  if (n % 10 < 5) {
    n -= n % 10;
  } else {
    n += 10 - (n % 10);
  }
  return n;
}

console.log(roundSum(16, 17, 18));
