function doubleX(str) {
  for (i = 0; i < str.length; i++) {
    if (str.charAt(i) === "x") {
      if (str.charAt(i + 1) === "x") {
        return true;
      } else {
        return false;
      }
    }
  }
  return false;
}
console.log(doubleX("axxbb"));
console.log(doubleX("axaxax"));
console.log(doubleX("xxxxx"));
