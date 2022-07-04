function notString(str) {
  const s = str.substr(0, 3);
  if (s == "not") {
    return str;
  }
  return "not " + str;
}
console.log(notString("not"));
console.log(notString("not x"));
console.log(notString("str"));
console.log(notString("boolean"));
