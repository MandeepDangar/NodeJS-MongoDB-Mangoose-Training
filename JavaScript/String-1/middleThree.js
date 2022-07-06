function middleThree(str) {
  const mid = (str.length + 1) / 2;
  return str.slice(mid - 2, mid + 1);
}
console.log(middleThree("Candy"));
