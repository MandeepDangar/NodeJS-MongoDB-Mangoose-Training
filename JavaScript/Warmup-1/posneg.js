function posNeg(a, b, negative) {
  if (negative === true && a <= 0 && b <= 0) {
    return true;
  } else if (negative === true && (a >= 0 || b >= 0)) {
    return false;
  }
  if (a <= 0 && b <= 0) {
    return false;
  }
  if (a <= 0 || b <= 0) {
    return true;
  }
  return false;
}

console.log(posNeg(-1, -1, true));
console.log(posNeg(-1, -1, false));
console.log(posNeg(-1, 1, true));
console.log(posNeg(-1, 1, false));
