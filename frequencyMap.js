// a function to create a simple
// frequency counter using a map

function getFrequencyCounter(items) {
  let freqs = new Map();

  for (let item of items) {
    let curr = freqs.get(item) || 0;
    freqs.set(item, curr + 1);
  }

  return freqs;
}
