function makes10(a, b) {
  if (a === 10 || b === 10 || a + b == 10) {
    return true;
  }
  return false;
}

console.log(makes10(10, 2));
console.log(makes10(5, 10));
console.log(makes10(20, -10));
console.log(makes10(5, 6));
