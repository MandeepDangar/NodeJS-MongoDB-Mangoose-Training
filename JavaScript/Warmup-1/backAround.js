function backAround(str) {
  const c = str.charAt(str.length - 1);
  return c + str + c;
}
console.log(backAround("cat"));
console.log(backAround("a"));
console.log(backAround("dog"));
console.log(backAround(""));
console.log(backAround("Mandeep"));
