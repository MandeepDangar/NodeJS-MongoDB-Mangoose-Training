function diff21(n) {
  if (n < 21) {
    return -(n - 21);
  }
  return 2 * (n - 21);
}

console.log(diff21(56));
console.log(diff21(11));
