function makeTags(tag, word) {
  return "<" + tag + ">" + word + "</" + tag + ">";
}
console.log(makeTags("i", "Yay"));
