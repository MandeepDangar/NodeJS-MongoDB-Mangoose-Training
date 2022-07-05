function arrayCount9(nums) {
  let cnt = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] === 9) {
      cnt++;
    }
  }
  return cnt;
}
console.log(arrayCount9([1, 2, 9]));
console.log(arrayCount9([1, 9, 9]));
console.log(arrayCount9([1, 9, 9, 3, 9]));
