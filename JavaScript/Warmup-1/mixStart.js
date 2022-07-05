function mixStart(str) {
  if (str.slice(1, 3) === "ix") {
    return true;
  }
  return false;
}

console.log(mixStart("mix snacks"));
console.log(mixStart("pix snacks"));
console.log(mixStart("piz snacks"));
