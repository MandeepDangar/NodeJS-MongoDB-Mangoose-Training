function linearIn(outer, inner) {
  let numFound = 0;
  if (inner.length == 0) {
    return true;
  }
  let k = 0;
  for (i = 0; i < outer.length; i++) {
    if (outer[i] == inner[k]) {
      numFound++;
      k++;
    } else if (outer[i] > inner[k]) {
      return false;
    }
    if (numFound == inner.length) return true;
  }
  return false;
}
console.log(linearIn([1, 2, 4, 6], [2, 3, 4]));
