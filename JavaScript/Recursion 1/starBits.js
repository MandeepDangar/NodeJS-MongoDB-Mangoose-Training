function starBit(str) {
  if (str === "") {
    return str;
  }
  if (str.charAt(0) === "-") {
    if (str.charAt(str.length - 1) === "*") {
      return str;
    } else {
      return starBit(str.substring(0, str.length - 1));
    }
  }
  return starBit(str.substring(1));
}
console.log(starBit("xyz,-abc*123"));
