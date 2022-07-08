function firstLast6(nums) {
  if (nums[0] === 6 || nums[nums.length - 1] === 6) {
    return true;
  }
  return false;
}
console.log(firstLast6([13, 6, 1, 2, 3]));
