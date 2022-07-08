function fix23(nums) {
  let arr = [];
  for (i = 0; i < nums.length; i++) {
    if (nums[i] === 2 && nums[i + 1] === 3) {
      arr[i] = nums[i];
      arr[i + 1] = 0;
      i++;
    } else {
      arr[i] = nums[i];
    }
  }
  return arr;
}
console.log(fix23([1, 2, 3]));
