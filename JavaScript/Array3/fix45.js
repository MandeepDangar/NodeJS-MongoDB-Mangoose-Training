function fix45(nums) {
  for (i = 0; i < nums.length; i++) {
    if (nums[i] == 4) {
      for (j = 0; j < nums.length; j++) {
        if (nums[j] == 5) {
          if (j > 0 && nums[j - 1] != 4) {
            let tmp = nums[i + 1];
            nums[i + 1] = 5;
            nums[j] = tmp;
          } else if (j == 0) {
            let tmp = nums[i + 1];
            nums[i + 1] = 5;
            nums[j] = tmp;
          }
        }
      }
    }
  }

  return nums;
}
console.log(fix45([5, 4, 9, 4, 9, 5]));
