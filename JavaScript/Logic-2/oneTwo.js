function oneTwo(str) {
  let s = "";
  for (i = 0; i < str.length; i += 3) {
    let a = "";
    a += str.slice(i, i + 3);
    if (a.length === 3) {
      s += a.charAt(1) + a.charAt(2) + a.charAt(0);
    }
  }
  return s;
}
console.log(oneTwo("abc"));
