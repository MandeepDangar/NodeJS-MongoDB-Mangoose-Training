function biggerTwo(a, b) {
  let suma = a[0] + a[1];
  let sumb = b[0] + b[1];
  return suma >= sumb ? a : b;
}
console.log(biggerTwo([3, 4], [1, 2]));
