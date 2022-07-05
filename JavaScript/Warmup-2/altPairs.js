function altPairs(str) {
  let cnt = 0;
  let s = "";
  for (i = 0; i < str.length; i++) {
    if (cnt == 2) {
      cnt = 0;
      i += 2;
    }
    s += str.charAt(i);
    cnt++;
  }
  return s;
}

console.log(altPairs("kitten"));
console.log(altPairs("Chocolate"));
console.log(altPairs("CodingHorror"));
