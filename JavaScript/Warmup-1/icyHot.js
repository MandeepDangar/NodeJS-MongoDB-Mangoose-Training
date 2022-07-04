function icyHot(temp1, temp2) {
  if ((temp1 < 0 && temp2 > 100) || (temp2 < 0 && temp1 > 100)) {
    return true;
  }
  return false;
}
console.log(icyHot(-1, 100));
console.log(icyHot(100, -20));
console.log(icyHot(20, 50));
console.log(icyHot(150, -50));
console.log(icyHot(-20, -10));
