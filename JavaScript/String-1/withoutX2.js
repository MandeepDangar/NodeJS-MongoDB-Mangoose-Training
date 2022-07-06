function withoutX2(str) {
  if (str.charAt(0) === "x" && str.charAt(1) === "x") {
    return str.slice(2, str.length);
  } else if (str.charAt(0) === "x") {
    return str.slice(1, str.length);
  } else if (str.charAt(1) === "x") {
    return str.charAt(0) + str.slice(2, str.length);
  }
  return str;
}

console.log(withoutX2("xHi"));
