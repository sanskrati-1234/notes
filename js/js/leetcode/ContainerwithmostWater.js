/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let start = 0;
  let end = height.length - 1;
  let finalArea = 0;
  while (start < end) {
    let area = Math.min(height[start], height[end]) * (end - start);
    finalArea = Math.max(area, finalArea);
    if (height[start] < height[end]) {
      start++;
    } else {
      end--;
    }
  }
  return finalArea;
};
