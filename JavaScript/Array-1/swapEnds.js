function swapEnds(nums) {
  let arr = [];
  for (i = 0; i < nums.length; i++) {
    if (i === 0) {
      arr[i] = nums[nums.length - 1];
    } else if (i === nums.length - 1) {
      arr[i] = nums[0];
    } else {
      arr[i] = nums[i];
    }
  }
  return arr;
}
console.log(swapEnds([8, 6, 7, 9, 5]));
