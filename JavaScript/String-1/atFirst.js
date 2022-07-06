function atFirst(str) {
  if (str.length === 1) {
    return str + "@";
  } else if (str.length === 0) {
    return "@@";
  }
  return str.slice(0, 2);
}

console.log(atFirst("hello"));
