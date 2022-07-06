function minCat(a, b) {
  if (a.length <= b.length && a.length > 0) {
    return a + b.slice(b.length - a.length, b.length);
  }
  if (b.length <= a.length && b.length > 0) {
    return a.slice(a.length - b.length, a.length) + b;
  }
  return "";
}
console.log(minCat("Hello", "Hi"));
