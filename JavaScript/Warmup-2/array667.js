function array667(nums) {
  let cnt = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] === 6) {
      if (nums[i + 1] === 6 || nums[i + 1] === 7) {
        cnt++;
      }
    }
  }
  return cnt;
}
console.log(array667([6, 6, 2]));
console.log(array667([6, 6, 2, 6]));
console.log(array667([6, 7, 2, 6]));
