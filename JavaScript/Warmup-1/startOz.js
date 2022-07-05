function startOz(str) {
  if (str.includes("oz")) {
    return "oz";
  } else if (str.includes("z") && str.charAt(1) === "z") {
    return "z";
  } else if (str.includes("o") && str.charAt(0) === "o") {
    return "o";
  }
  return "";
}

console.log(startOz("ozymandias"));
console.log(startOz("bzoo"));
console.log(startOz("oxx"));
