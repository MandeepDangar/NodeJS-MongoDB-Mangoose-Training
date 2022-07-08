function unlucky1(nums) {
  for (i = 0; i < 2; i++) {
    if (nums[i] === 1 && nums[i + 1] === 3) {
      return true;
    }
  }
  for (i = nums.length - 2; i > nums.length - 3; i--) {
    if (nums[i] === 1 && nums[i + 1] === 3) {
      return true;
    }
  }
  return false;
}
console.log(unlucky1([2, 1, 3, 4, 5]));
