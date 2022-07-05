function endUp(str) {
  if (str.length > 3) {
    return (
      str.slice(0, str.length - 3) +
      str.slice(str.length - 3, str.length).toUpperCase()
    );
  }
  return str.toUpperCase();
}
console.log(endUp("Hello"));
console.log(endUp("hi there"));
console.log(endUp("hi"));
