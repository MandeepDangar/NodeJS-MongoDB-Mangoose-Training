function without2(str) {
  if (
    str.slice(0, 2) === str.slice(str.length - 2, str.length) &&
    str.length >= 2
  ) {
    return str.slice(2, str.length);
  }
  return str;
}
console.log(without2("HelloHe"));
