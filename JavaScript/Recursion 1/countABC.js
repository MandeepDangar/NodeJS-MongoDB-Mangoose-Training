function countAbc(str) {
  if (str.length < 3) {
    return 0;
  }
  if (str.slice(0, 3) === "abc" || str.slice(0, 3) === "aba") {
    return 1 + countAbc(str.substring(1));
  }
  return countAbc(str.substring(1));
}
console.log(countAbc("abaxxaba"));
