function seriesUp(n) {
  let arr = [];
  let ind = 0;
  for (i = 1; i <= n; i++) {
    for (j = 1; j <= i; j++) {
      arr[ind] = j;
      ind++;
    }
  }
  return arr;
}
console.log(seriesUp(4));
