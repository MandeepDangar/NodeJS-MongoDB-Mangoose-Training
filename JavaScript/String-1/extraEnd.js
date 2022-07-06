function extraEnd(str) {
  return (
    str.slice(str.length - 2, str.length) +
    str.slice(str.length - 2, str.length) +
    str.slice(str.length - 2, str.length)
  );
}

console.log(extraEnd("Hello"));
