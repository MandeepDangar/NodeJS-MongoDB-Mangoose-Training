function repeatSeparator(word, sep, count) {
  let newWord = "";
  for (i = 0; i < count; i++) {
    if (i < count - 1) newWord += word + sep;
    else newWord += word;
  }
  return newWord;
}

console.log(repeatSeparator("Word", "X", 3));
