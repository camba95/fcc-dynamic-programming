const canSum = (targetSum, numbers) => {
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;
  for (let num of numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers)) {
      return true;
    }
  }
  return false;
};

// m = target sum
// n = array length
// O(n^m) time complexity
// O(m) space complexity
// height: m (subtract 1)

const canSum2 = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;
  for (let num of numbers) {
    const remainder = targetSum - num;
    if (canSum2(remainder, numbers, memo)) {
      memo[targetSum] = true;
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
};

// m = target sum
// n = array length
// O(n*m) time complexity
// O(m) space complexity
// height: m (subtract 1)

console.info(canSum2(7, [2, 3])); // true
console.info(canSum2(7, [5, 3, 4, 7])); // true
console.info(canSum2(7, [2, 4])); // false
console.info(canSum2(8, [2, 3, 5])); // true
console.info(canSum2(300, [7, 14])); // false
