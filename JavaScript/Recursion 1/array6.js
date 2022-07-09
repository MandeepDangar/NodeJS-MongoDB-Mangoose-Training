function array6(nums, index) {
  if (index >= nums.length) {
    return false;
  }
  if (nums[index] == 6) {
    return true;
  }
  return array6(nums, index + 1);
}
console.log(array6([1, 6, 4], 0));
