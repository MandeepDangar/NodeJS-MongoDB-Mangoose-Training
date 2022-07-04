function in1020(a, b) {
  if ((a <= 20 && a >= 10) || (b <= 20 && b >= 10)) {
    return true;
  }
  return false;
}

console.log(in1020(10, 20));
console.log(in1020(12, 25));
console.log(in1020(23, 15));
console.log(in1020(55, 65));
console.log(in1020(44, 15));
