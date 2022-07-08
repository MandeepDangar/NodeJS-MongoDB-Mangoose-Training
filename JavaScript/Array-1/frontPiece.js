function frontPiece(nums) {
  if (nums.length >= 2) {
    return [nums[0], nums[1]];
  }
  return nums;
}
console.log(frontPiece([1, 2, 3]));
