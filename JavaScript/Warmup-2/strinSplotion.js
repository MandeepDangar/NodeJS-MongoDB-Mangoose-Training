function stringSplosion(str) {
  let s = "";
  for (i = 0; i <= str.length; i++) {
    s += str.slice(0, i);
  }
  return s;
}
console.log(stringSplosion("Code"));
