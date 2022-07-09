function endX(str) {
  if (str === "") {
    return str;
  }
  if (str.charAt(0) == "x") {
    return endX(str.substring(1)) + "x";
  }
  return str.charAt(0) + endX(str.substring(1));
}
console.log(endX("xhixhix"));
