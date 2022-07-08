function maxMirror(nums) {
  let len = nums.length;
  let count = 0;
  let max = 0;
  for (i = 0; i < len; i++) {
    count = 0;
    for (j = len - 1; i + count < len && j > -1; j--) {
      if (nums[i + count] == nums[j]) {
        count++;
      } else {
        if (count > 0) {
          max = Math.max(count, max);
          count = 0;
        }
      }
    }
    max = Math.max(count, max);
  }
  return max;
}
console.log(maxMirror([1, 2, 3, 8, 9, 3, 2, 1]));
