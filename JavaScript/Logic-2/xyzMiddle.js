function xyzMiddle(str) {
  let xyz = false;
  if (str.length < 3) {
    return false;
  } else {
    for (let i = 0; i < str.length; i++) {
      if (
        str.charAt(i) === "x" &&
        str.charAt(i + 1) === "y" &&
        str.charAt(i + 2) === "z"
      ) {
        let left = i;
        let right = str.length - 3 - i;
        if (left === right || left === right + 1 || right === left + 1) {
          return true;
        }
      }
    }
    return false;
  }
}

console.log(xyzMiddle('AAxyzBB'));
