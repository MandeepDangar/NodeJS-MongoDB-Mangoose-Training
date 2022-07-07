function repeatEnd(str, n) {
  let s = "";
  for (i = 0; i < n; i++) {
    s += str.slice(str.length - n, str.length);
  }
  return s;
}
console.log(repeatEnd("Hello", 3));
