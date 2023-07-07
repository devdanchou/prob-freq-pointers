function squares(nums1, nums2) {
  if (nums1.length !== nums2.length) {
    return false;
  }

  for (let i = 0; i < nums1.length; i++) {
    const foundAt = nums2.indexOf(nums1[i] ** 2);

    if (foundAt === -1) {
      return false;
    }

    nums2.splice(foundAt, 1);
  }

  return true;
}
// end squares

function squaresWithFreqCounter(nums1, nums2) {
  if (nums1.length !== nums2.length) return false;

  const freqs1 = getFrequencyCounter(nums1);
  const freqs2 = getFrequencyCounter(nums2);

  for (let key in freqs1) {
    const squared = key ** 2;

    if (!(squared in freqs2)) {
      return false;
    }

    if (freqs2[squared] !== freqs1[key]) {
      return false;
    }
  }

  return true;
}
// end squaresWithFreqCounter