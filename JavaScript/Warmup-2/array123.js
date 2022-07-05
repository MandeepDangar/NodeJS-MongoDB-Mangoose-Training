function array123(nums) {
  for (i = 0; i < nums.length ; i++) {
    if (nums[i] === 1 && nums[i + 1] === 2 && nums[i + 2] === 3) {
      return true;
    }
  }
  return false;
}
console.log(array123([1, 2, 3]));
console.log(array123([5, 1, 2, 3, 5]));
console.log(array123([0, 1, 2]));
