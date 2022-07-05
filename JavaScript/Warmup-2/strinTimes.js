function stringTimes(str, n) {
  let s = "";
  for (i = 0; i < n; i++) {
    s += str;
  }
  return s;
}
console.log(stringTimes("Hi", 2));
console.log(stringTimes("Hi", 3));
console.log(stringTimes("Hi", 1));
