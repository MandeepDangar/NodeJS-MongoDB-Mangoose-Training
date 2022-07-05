function frontTimes(str, n) {
  let s = "";
  for (i = 0; i < n; i++) {
    s += str.slice(0, 3);
  }
  return s;
}
console.log(frontTimes("Chocolate", 2));
console.log(frontTimes("Chocolate", 3));
console.log(frontTimes("Abc", 3));
