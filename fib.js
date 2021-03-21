const fib = (n) => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};

// O(2^n) time complexity
// O(n) space complexity

// Memoization

const fib2 = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib2(n - 1, memo) + fib2(n - 2, memo);
  return memo[n];
};

// O(n) time complexity
// O(n) space complexity

console.info(fib2(6));
console.info(fib2(7));
console.info(fib2(8));
console.info(fib2(50));
