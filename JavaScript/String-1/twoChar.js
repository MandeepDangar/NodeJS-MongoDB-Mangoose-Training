function twoChar(str, n) {
  if (str.length - 2 < n || n < 0) {
    return str.slice(0, 2);
  }
  return str.slice(n, n + 2);
}
console.log(twoChar("java", 0));
