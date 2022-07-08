function reverse3(nums) {
  let arr = [];
  for (i = 2; i >= 0; i--) {
    arr[2 - i] = nums[i];
  }
  return arr;
}
console.log(reverse3([5, 11, 9]));
