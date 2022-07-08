function midThree(nums) {
  let mid = (nums.length - 1) / 2;
  return [nums[mid - 1], nums[mid], nums[mid + 1]];
}
console.log(midThree([8, 6, 7, 5, 3, 0, 9]));
