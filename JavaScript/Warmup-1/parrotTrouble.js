function parrotTrouble(talking, hour) {
  if (talking === true && (hour < 7 || hour > 20)) {
    return true;
  }
  return false;
}
console.log(parrotTrouble(true, 21));
console.log(parrotTrouble(true, 2));
console.log(parrotTrouble(false, 22));
console.log(parrotTrouble(false, 15));
