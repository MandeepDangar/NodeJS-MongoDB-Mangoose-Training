function withoutX(str) {
  if (str.charAt(0) === "x" && str.charAt(str.length - 1) === "x") {
    return str.slice(1, str.length - 1);
  } else if (str.charAt(0) === "x") {
    return str.slice(1, str.length);
  } else if (str.charAt(str.length - 1) === "x") {
    return str.slice(0, str.length - 1);
  }
  return str;
}

console.log(withoutX("xHix"));
