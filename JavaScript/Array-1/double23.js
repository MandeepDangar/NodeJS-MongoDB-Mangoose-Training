function double23(nums) {
  let cnt2 = 0;
  let cnt3 = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] === 2) {
      cnt2++;
    }
    if (nums[i] === 3) {
      cnt3++;
    }
  }
  if (cnt2 === 2 || cnt3 === 2) {
    return true;
  }
  return false;
}
console.log(double23([2, 3]));
