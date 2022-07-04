function front22(str) {
  const ch = str.slice(0, 2);
  return ch + str + ch;
}
console.log(front22(""));
console.log(front22("HEllo"));
console.log(front22("kitten"));
console.log(front22("mandeep"));
console.log(front22("a"));
console.log(front22("man"));
