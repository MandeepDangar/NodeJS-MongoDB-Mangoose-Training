function maxTriple(nums) {
  let max = 0;
  let arr = [nums[0], nums[(nums.length - 1) / 2], nums[nums.length - 1]];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(maxTriple([1, 2, 3]));
