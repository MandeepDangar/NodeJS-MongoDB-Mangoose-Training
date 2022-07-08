function sum2(nums) {
  let sum = 0;
  if (nums.length === 1) {
    sum = nums[0];
  }
  if (nums.length > 1) {
    for (i = 0; i < 2; i++) {
      sum += nums[i];
    }   
  }

  return sum;
}
console.log(sum2([1, 1, 1, 1]));
