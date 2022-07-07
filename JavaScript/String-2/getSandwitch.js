function getSandwich(str) {
  let len = str.length;
  let tmpString = "";
  let finalString = "";
  let start = 0;
  let finish = 0;
  let found = false;
  if (len <= 10) return "";
  for (let i = 0; i < len - 4; i++) {
    tmpString = str.substring(i, i + 5);
    if (tmpString === "bread" && found == true) finish = i;
    if (tmpString === "bread" && found == false) {
      start = i + 5;
      found = true;
    }
  }
  finalString = str.substring(start, finish);
  return finalString;
}
console.log(getSandwich("breadjambread"));
