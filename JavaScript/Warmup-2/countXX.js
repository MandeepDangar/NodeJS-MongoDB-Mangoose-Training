function countXX(str) {
  let cnt = 0;
  for (i = 0; i < str.length - 1; i++) {
    if (str.slice(i, i + 2) === "xx") {
      cnt++;
    }
  }
  return cnt;
}
console.log(countXX("abcxx"));
console.log(countXX("xxx"));
console.log(countXX("xxxx"));
