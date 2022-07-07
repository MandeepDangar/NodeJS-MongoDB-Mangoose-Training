function xyBalance(str) {
  let x = false;
  let y = false;
  let xy = true;
  for (i = 0; i < str.length; i++) {
    if (str.charAt(i) === "x") {
      x = true;
    }
    if (str.charAt(i) === "y") {
      y = true;
      xy = true;
    }
    if (xy && str.charAt(i) == "x") {
      xy = false;
    }
  }
  return xy;
}

console.log(xyBalance("yaaxbb"));
