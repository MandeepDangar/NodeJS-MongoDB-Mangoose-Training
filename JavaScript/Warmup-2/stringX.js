function stringX(str) {
  let s = "";
  s += str.charAt(0);
  for (i = 1; i < str.length - 1; i++) {
    if (str.charAt(i) === "x") {
      continue;
    }
    s += str.charAt(i);
  }
  s += str.charAt(str.length - 1);
  return s;
}

console.log(stringX("xxHxix"));
console.log(stringX("abxxxcd"));
console.log(stringX("xabxxxcdx"));
