function deFront(str) {
  if (str.charAt(0) === "a" && str.charAt(1) === "b") {
    return str;
  } else if (str.charAt(0) === "a") {
    return "a" + str.slice(2, str.length);
  } else if (str.charAt(1) === "b") {
    return "b" + str.slice(2, str.length);
  }
  return str.slice(2, str.length);
}
console.log(deFront("Hello"));
