function endsLy(str) {
  if (str.slice(str.length - 2, str.length) === "ly") {
    return true;
  }
  return false;
}
console.log(endsLy("oddly"));
