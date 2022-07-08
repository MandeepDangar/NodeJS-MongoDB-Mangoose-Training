function sum3(nums) {
  let sum = 0;
  for (i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}
console.log(sum3([5, 11, 2]));
