function middleTwo(str) {
  const n = str.length / 2;
  return str.charAt(n - 1) + str.charAt(n);
}
console.log(middleTwo("string"));
