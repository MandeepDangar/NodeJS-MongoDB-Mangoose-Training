function countHi2(str) {
  if (str.length === 0) {
    return 0;
  }
  if (str.substring(0, 2) === "hi") {
    return 1 + countHi2(str.substring(2));
  }
  if (str.charAt(0) === "x" && str.substring(1, 3) === "hi") {
    return countHi2(str.substring(3));
  }
  return countHi2(str.substring(1));
}
console.log(countHi2("ahixhi"));
