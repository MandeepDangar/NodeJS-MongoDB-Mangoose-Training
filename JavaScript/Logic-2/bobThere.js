function bobThere(str) {
  if (str.length < 3) {
    return false;
  } else {
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === "b" && str.charAt(i + 2) === "b") {
        return true;
      }
    }
  }
  return false;
}
console.log(bobThere("abcbob"));
