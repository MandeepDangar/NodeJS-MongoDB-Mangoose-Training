function mixString(a, b) {
  let large = 0;
  if (a.length > b.length) {
    large = a.length;
  } else {
    large = b.length;
  }
  let mix = "";
  for (i = 0; i < large; i++) {
    mix += a.charAt(i) + b.charAt(i);
  }
  return mix;
}
console.log(mixString("abc", "xyz"));
