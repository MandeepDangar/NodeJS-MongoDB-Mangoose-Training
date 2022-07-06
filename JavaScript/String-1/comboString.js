function comboString(a, b) {
  if (a.length < b.length) {
    return a + b + a;
  }
  return b + a + b;
}
console.log(comboString("Hello", "hi"));
