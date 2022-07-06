function frontAgain(str) {
  if (
    str.slice(0, 2) === str.slice(str.length - 2, str.length) &&
    str.length >= 2
  ) {
    return true;
  }
  return false;
}
console.log(frontAgain("edited"));
