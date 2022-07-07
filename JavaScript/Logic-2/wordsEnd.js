function wordEnds(str, word) {
  let s = "";
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === word.charAt(0)) {
      s += str.charAt(i - 1);
    }
    if (str.charAt(i) === word.charAt(word.length - 1)) {
      s += str.charAt(i + 1);
    }
  }
  return s;
}
console.log(wordEnds("XY1XY", "XY"));
