function countHi(str) {
  let cntHi = 0;
  for (i = 0; i < str.length; i++) {
    if (str.slice(i, i + 2) === "hi") {
      cntHi++;
    }
  }
  return cntHi;
}

console.log(countHi("abc hi ho"));
