function has23(nums) {
  for (i = 0; i < 2; i++) {
    if (nums[i] === 2 || nums[i] === 3) {
      return true;
    }
  }
  return false;
}
console.log(has23([4, 3]));
