function triangle(rows) {
  if (rows === 0) {
    return 0;
  }
  return rows + triangle(rows - 1);
}
console.log(triangle(2));
