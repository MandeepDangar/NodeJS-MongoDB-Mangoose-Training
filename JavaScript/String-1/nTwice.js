function nTwice(str, n) {
  return str.slice(0, n) + str.slice(str.length - n, str.length);
}
console.log(nTwice("hello", 2));
