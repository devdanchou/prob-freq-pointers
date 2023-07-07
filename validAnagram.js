function validAnagram(word1, word2) {
  if (word1.length !== word2.length) return false;

  let freqs1 = getFrequencyCounter(word1);
  let freqs2 = getFrequencyCounter(word2);

  for (let key in freqs1) {
    if (freqs1[key] !== freqs2[key]) return false;
  }

  return true;
}