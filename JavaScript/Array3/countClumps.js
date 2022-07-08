function countClumps(nums) {
  let match = false;
  let count = 0;
  for (i = 0; i < nums.length - 1; i++) {
    if (nums[i] == nums[i + 1] && !match) {
      match = true;
      count++;
    } else if (nums[i] != nums[i + 1]) {
      match = false;
    }
  }
  return count;
}
console.log(countClumps([1, 2, 2, 3, 4, 4]));
