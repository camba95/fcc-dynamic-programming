const howSum = (targetSum, numbers) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  for (let num of numbers) {
    const remainder = targetSum - num;
    const result = howSum(remainder, numbers);
    if (result) {
      return [...result, num];
    }
  }
  return null;
};

// m = target sum
// n = array length
// O((n^m) * m) time complexity
// O(m) space complexity
// height: m (subtract 1)

const howSum2 = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  for (let num of numbers) {
    const remainder = targetSum - num;
    const result = howSum2(remainder, numbers, memo);
    if (result) {
      memo[targetSum] = [...result, num];
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;
  return null;
};

// m = target sum
// n = array length
// O(n * m^2) time complexity
// O(m^2) space complexity
// height: m (subtract 1)

console.info(howSum2(7, [2, 3])); // true
console.info(howSum2(7, [5, 3, 4, 7])); // true
console.info(howSum2(7, [2, 4])); // false
console.info(howSum2(8, [2, 3, 5])); // true
console.info(howSum2(300, [7, 14])); // false
