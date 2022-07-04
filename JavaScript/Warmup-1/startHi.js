function startHi(str) {
  const s = str.slice(0, 2);
  if (s === "hi") {
    return true;
  }
  return false;
}

console.log(startHi(""));
console.log(startHi("Hi mandeep"));
console.log(startHi("hi mandeep"));
console.log(startHi("hi "));
console.log(startHi("ho hi"));
