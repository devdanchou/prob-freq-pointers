function sumZero(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === 0) {
        return [nums[i], nums[j]];
      }
    }
  }

  throw new Error("Pair not found");
}
// end sumZero

function sumZeroMultiplePointers(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum === 0) {
      return [nums[left], nums[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }

  throw new Error("Pair not found");
}
// end sumZeroMultiplePointers
