function catDog(str) {
  let cat = false;
  let dog = false;
  let c = 0,
    d = 0;
  if (str.length < 3) {
    return true;
  }
  for (i = 0; i < str.length; i++) {
    if (str.slice(i, i + 3) == "cat") {
      cat = true;
      c++;
    }
    if (str.slice(i, i + 3) == "dog") {
      dog = true;
      d++;
    }
  }
  if (dog && cat && c === d) {
    return true;
  }
  return false;
}
console.log(catDog("catdog"));
