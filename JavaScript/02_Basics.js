// Comment in JS

let x, y, z; // Declaration of variable
var variable; // used before but replaced by let
// var and let value can be changed
const c = 20; // Remains same throughout the code
let str = "string";
str = "new string";

// changing value of const is not allowed
x = 5;
y = 6;
z = x + y; // arithmatic operation
console.log("x:", x, "y:", y, "z:", z);
console.log("welcome to JS..");

// js requires environment to run
// v8 engine in chrome browser
// v8 convert js to machine code
// v8 is written in c or c++
// node js is runtime environment to run js code
// node js send code to v8 engine of chrome

let w = 2;
let v = 3;
// Arithmatic operations
console.log("w+v", w + v); // Addition
console.log("w-v", w - v); // Sub
console.log("v*w", v * w); // Multiply
console.log("v/w", v / w); // Div
console.log("v%w", v % w); // Modulo
console.log("v**w", v ** w); // exp
console.log("v++", v++); // post inc
console.log("w--", w--); // post dec
console.log("++v", ++v); // pre inc
console.log("--w", --w); // pre dec

// Assignment operatior
let a = 2;
let b = 2.0;
console.log("a==b", a == b);
console.log("a===b", a === b);

// Arrays
let arr = [0, 1, 2, 3, 4, 5, 2, 3, 4, 23, 4, 5, 864];
console.log(arr);

// JavaScript -> typescript (exttension of js) ts is strict in types of data going to be handled.

let o = {
  id: "abc",
  name: "mandeep",
};

// String methods

let str1 = "Hello Everyone";
console.log("String length : ", str1.length);

// Slice(startIndex , endIndex)
console.log(str1.slice(6, 9)); // 6,7,8
console.log(str1.slice(-8, -2)); // -8,-7,-6,-5,-4,-3
// substring (startIndex, endIndex)
console.log(str1.slice(6, 9));
console.log(str1.substring(2, 5));
console.log(str1);
//sunstring treats -ve values as 0

// substr (startIndex, count)
console.log(str1.substr(8, 12)); // If doesn.t provide last count value then it will consider whole tring from starting og character.

// function
let ans = mult(5, 6);
function mult(a, b) {
  if (a > 2) {
    console.log(a);
  } else if (a < 5) {
    console.log("a s lessthan 5");
  } else {
    console.log("Else condition");
  }

  switch (a) {
    case 1:
      console.log("1");
      break;
    case 2:
      console.log("2");
      break;
    default:
      console.log(a);
      break;
  }
  return a * b;
}
console.log(ans);

// inbuilt array function

console.log(arr.sort());
console.log(arr.length);
console.log(arr.reverse());

// filter
const result = arr.filter((item) => {
  return item >= 4;
});
console.log("Result after filtering : ", result);
