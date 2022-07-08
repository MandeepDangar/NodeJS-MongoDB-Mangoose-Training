function make2(a, b) {
  let arr = [];
  let cnt = 2;
  let alen = a.length;
  let blen = b.length;
  let inda = 0;
  let indb = 0;
  let i = 0;
  while (cnt) {
    if (alen > 0) {
      arr[i] = a[inda];
      inda++;
      alen--;
      i++;
    } else if (blen > 0) {
      arr[i] = b[indb];
      indb++;
      blen--;
      i++;
    }
    cnt--;
  }
  return arr;
}
console.log(make2([4, 5], [1, 2, 3]));
