function countCode(str) {
  let cnt = 0;
  for (i = 0; i < str.length; i++) {
    if (str.slice(i, i + 2) + str.slice(i + 3, i + 4) === "coe") {
      cnt++;
    }
  }
  return cnt;
}
console.log(countCode("aaacodebbb"));
