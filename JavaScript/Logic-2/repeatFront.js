function repeatFront(str, n) {
  let s = "";
  for (i = 0; (i = n); i++) {
    s += str.slice(0, n);
    n--;
  }
  return s;
}
console.log(repeatFront("Chocolate", 4));
