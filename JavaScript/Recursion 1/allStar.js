function allStar(str) {
  if (str.length === 0) {
    return "";
  }
  if (str.length === 1) {
    return str.charAt(0) + allStar(str.substring(1));
  }
  return str.charAt(0) + "*" + allStar(str.substring(1));
}
console.log(allStar("hello"));
