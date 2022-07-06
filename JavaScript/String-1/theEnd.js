function theEnd(str, front) {
  if (front) {
    return str.charAt(0);
  }
  return str.charAt(str.length - 1);
}
console.log(theEnd("Hello", true));
