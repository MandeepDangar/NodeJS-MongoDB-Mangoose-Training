function lastTwo(str) {
  let substr = str.slice(str.length - 2, str.length);
  return str.slice(0, str.length - 2) + substr.split("").reverse().join("");
}
console.log(lastTwo("coding"));
