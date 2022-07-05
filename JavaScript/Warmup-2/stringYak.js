function stringYak(str) {
  let s = "";
  for (i = 0; i <= str.length; i++) {
    if (str.slice(i, i + 3) === "yak") {
      i += 2;
      continue;
    }
    s += str.charAt(i);
  }
  return s;
}
console.log(stringYak("yakpak"));
console.log(stringYak("pakyak"));
console.log(stringYak("yak123ya"));
