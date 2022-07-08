function maxEnd3(nums) {
  let max = nums[0] > nums[nums.length - 1] ? nums[0] : nums[nums.length - 1];
  let arr = [];
  for (i = 0; i < nums.length; i++) {
    arr[i] = max;
  }
  return arr;
}
console.log(maxEnd3([11, 5, 9]));
