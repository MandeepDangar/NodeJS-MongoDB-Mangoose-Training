function makeLast(nums) {
  const arr = [];
  let i = 0;
  while (i <= 2 * nums.length - 2) {
    arr[i] = 0;
    i++;
  }
  arr[i] = nums[nums.length - 1];
  return arr;
}
console.log(makeLast([4, 5, 6]));
