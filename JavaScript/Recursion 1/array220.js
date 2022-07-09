function array220(nums, i) {
  if (i >= nums.length - 1) {
    return false;
  }
  if (nums[i + 1] == nums[i] * 10) {
    return true;
  }
  return array220(nums, i + 1);
}
console.log(array220([1, 2, 20], 0));
