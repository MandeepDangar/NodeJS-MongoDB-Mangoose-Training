function everyNth(str, n) {
  let s = "";
  for (i = 0; i < str.length; i += n) {
    s += str.charAt(i);
  }
  return s;
}
console.log(everyNth("Miracle", 2));
console.log(everyNth("abcdefg", 2));
console.log(everyNth("abcdefg", 3));
