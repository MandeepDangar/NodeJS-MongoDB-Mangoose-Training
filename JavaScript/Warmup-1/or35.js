function or35(n) {
  if (n % 3 === 0 || n % 5 === 0) {
    return true;
  }
  return false;
}

console.log(or35(5));
console.log(or35(3));
console.log(or35(2));
console.log(or35(0));
console.log(or35(55));
console.log(or35(156));
console.log(or35(146));
console.log(or35(145));
console.log(or35(6521));
console.log(or35(123));
console.log(or35(456));
console.log(or35(987));
console.log(or35(147));
console.log(or35(258));
console.log(or35(369));
