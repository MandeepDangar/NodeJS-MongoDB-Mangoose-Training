function close10(a, b) {
  const diff1 = Math.abs(a - 10);
  const diff2 = Math.abs(b - 10);
  if (diff1 > diff2) {
    return b;
  } else if (diff2 > diff1) {
    return a;
  }
  return 0;
}
console.log(close10(8, 13));
console.log(close10(13, 8));
console.log(close10(13, 7));
