function monkeyTrouble(aSmile, bSmile) {
  if (
    (aSmile === true && bSmile === false) ||
    (aSmile === false && bSmile === true)
  ) {
    return false;
  }
  return true;
}

console.log(monkeyTrouble(true, true));
console.log(monkeyTrouble(true, false));
console.log(monkeyTrouble(false, true));
console.log(monkeyTrouble(false, false));
