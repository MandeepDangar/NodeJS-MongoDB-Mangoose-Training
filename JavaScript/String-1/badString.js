function hasBad(str) {
  for (i = 0; i < 2; i++) {
    if (str.slice(i, i + 3) === "bad") {
      return true;
    }
  }
  return false;
}
console.log(hasBad("badxx"));
