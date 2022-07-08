function squareUp(n) {
  let i = 0;
  let ind = 0;
  let x = 0;
  let arr = [];
  while (n) {
    x++;
    for (i = 1; i < n; i++) {
      arr[ind] = 0;
      ind++;
    }
    for (j = x; j >= 1; j--) {
      arr[ind] = j;
      ind++;
    }
    n--;
  }
  return arr;
}
console.log(squareUp(3));
