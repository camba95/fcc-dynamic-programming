const fib = (n) => {
  const table = new Array(n + 1).fill(0);
  table[1] = 1;
  for (let i = 0; i <= n; i++) {
    table[i + 1] += table[i];
    table[i + 2] += table[i];
  }
  return table[n];
};

// O(n) time complexity
// O(n) space complexity

console.info(fib(6));
console.info(fib(7));
console.info(fib(8));
console.info(fib(50));
