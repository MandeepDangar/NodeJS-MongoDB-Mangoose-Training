function startWord(str, word) {
  let retstr = "";
  let index = 0;
  for (i = 0; i < word.length; i++) {
    if (word.charAt(i) === str.charAt(i)) {
      index = i;
    }
  }
  return str.slice(0, i);
}
console.log(startWord("hippo", "hi"));
