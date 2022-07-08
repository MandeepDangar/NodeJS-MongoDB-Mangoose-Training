function canBalance(nums) {
  let lSum = 0;
  for (i = 0; i < nums.length; i++) {
    lSum += nums[i];
    let rSum = 0;
    for (j = nums.length - 1; j > i; j--) {
      rSum += nums[j];
    }
    if (rSum == lSum) return true;
  }
  return false;
}
console.log(canBalance([2, 1, 1, 2, 1]));
