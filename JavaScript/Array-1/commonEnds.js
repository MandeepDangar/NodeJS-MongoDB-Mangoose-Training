function commonEnd(a, b) {
  if (a[0] === b[0] || a[a.length - 1] === b[b.length - 1]) {
    return true;
  }
  return false;
}
console.log(commonEnd([1, 2, 3], [7, 3, 2]));
