function delDel(str) {
  if (str.slice(1, 4) === "del") {
    return str.slice(0, 1) + str.slice(4, str.length);
  }
  return str;
}
console.log(delDel("adelbc"));
console.log(delDel("adelHello"));
console.log(delDel("abcdel"));
