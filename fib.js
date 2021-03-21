const fib = (n) => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};

console.info(fib(6));
console.info(fib(7));
console.info(fib(8));
console.info(fib(50));
