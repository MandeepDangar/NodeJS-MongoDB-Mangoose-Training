function missingChar(str, n) {
  return str.slice(0, n) + str.slice(n + 1);
}

console.log(missingChar("kitten", 2));
console.log(missingChar("kitten", 0));
console.log(missingChar("kitten", 1));
console.log(missingChar("kitten", 5));
