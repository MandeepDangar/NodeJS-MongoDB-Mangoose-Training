function frontBack(str) {
  if (str.length >= 2) {
    const c = str.charAt(0);
    return str.charAt(str.length - 1) + str.slice(1, str.length - 1) + c;
  }
  return str;
}
console.log(frontBack(""));
console.log(frontBack("a"));
console.log(frontBack("ab"));
console.log(frontBack("abc"));
console.log(frontBack("Apple"));
