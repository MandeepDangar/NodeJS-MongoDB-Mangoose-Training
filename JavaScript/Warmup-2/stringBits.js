function stringBits(str) {
  let s = "";
  for (i = 0; i < str.length; i += 2) {
    s += str.charAt(i);
  }
  return s;
}
console.log(stringBits("Hello"));
console.log(stringBits("Hi"));
console.log(stringBits("Heeololeo"));
