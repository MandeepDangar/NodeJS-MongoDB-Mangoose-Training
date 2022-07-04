function front3(str) {
  const s = str.slice(0, 3);
  return s + s + s;
}

console.log(front3("abc"));
console.log(front3(""));
console.log(front3("a"));
console.log(front3("abcdef"));
console.log(front3("ab"));
console.log(front3("Mandeep"));
