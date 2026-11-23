const findMaxConsecutiveOnes = function (nums) {
  let counts = 0;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      counts += 1
      if (counts > max) {
        max = counts;
      }
    } else {
      counts = 0;
    }
  }
  return max;
}