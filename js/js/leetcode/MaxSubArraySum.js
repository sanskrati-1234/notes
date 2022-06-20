/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length === 0) {
    return 0;
  }

  let currentsum = nums[0];
  let sum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentsum = Math.max(currentsum + nums[i], nums[i]);
    sum = Math.max(currentsum, sum);
  }
  return sum;
};
