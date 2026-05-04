function firstNonRepeating(str) {
  const count = {};

  // Count frequency
  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }

  // Find first non-repeating
  for (let char of str) {
    if (count[char] === 1) {
      return char;
    }
  }

  return null;
}