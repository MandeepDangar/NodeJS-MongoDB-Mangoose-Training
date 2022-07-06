function extraFront(str) {
  let s = str.substr(0, 2);
  return s + s + s;
}
console.log(extraFront("Hello"));
