function stringMatch(a, b) {
  let cnt = 0;
  for (i = 0; i < a.length - 1 || i < b.length - 1; i++) {
    if (a.slice(i, i + 2) === b.slice(i, i + 2)) {
      cnt++;
    }
  }
  return cnt;
}
console.log(stringMatch("xxcaazz", "xxbaaz"));
console.log(stringMatch("abc", "abc"));
console.log(stringMatch("abc", "axc"));
