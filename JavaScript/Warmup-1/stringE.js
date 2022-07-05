function stringE(str) {
  let cnt = 0;
  for (i = 0; i < str.length; i++) {
    if (str.charAt(i) === "e") {
      cnt++;
    }
  }
  if (cnt === 1 || cnt === 3) {
    return true;
  }
  return false;
}
console.log(stringE("Hello"));
console.log(stringE("Heelle"));
console.log(stringE("Heelele"));
