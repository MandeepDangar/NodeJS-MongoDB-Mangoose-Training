function rotateLeft3(nums) {
  let arr = [];
  let i = 0;    
  for (i = 0; i < nums.length - 1; i++) {
    arr[i] = nums[i + 1];
  }
  arr[i] = nums[0];
  return arr;
}
console.log(rotateLeft3([5, 11, 9]));
