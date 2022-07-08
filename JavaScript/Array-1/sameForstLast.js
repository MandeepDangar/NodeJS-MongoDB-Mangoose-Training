function sameFirstLast(nums) {
  if (nums.length > 0) {
    if (nums[0] === nums[nums.length - 1]) {
      return true;
    }
  }
  return false;
}
console.log(sameFirstLast([1, 2, 3, 1]));
