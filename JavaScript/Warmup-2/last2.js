function last2(str) {
  let subStrToFind = str.slice(str.length - 2, str.length);
  let newStr = str.substring(0, str.length - 2);
  let cnt = 0;
  for (i = 0; i < newStr.length; i++) {
    if (str.slice(i, i + 2) === subStrToFind) {
      cnt++;
    }
  }
  return cnt;
}

console.log(last2("hixxhi"));
console.log(last2("xaxxaxaxx"));
console.log(last2("axxaaxx"));
