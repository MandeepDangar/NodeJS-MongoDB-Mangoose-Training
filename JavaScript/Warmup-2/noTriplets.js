function noTriples(nums) {
  for (i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      if (nums[i + 1] === nums[i + 2]) {
        return false;
      }
    }
  }
  return true;
}

console.log(noTriples([1, 1, 2, 2, 1]));
console.log(noTriples([1, 1, 2, 2, 2, 1]));
console.log(noTriples([1, 1, 2, 2, 2, 1]));
