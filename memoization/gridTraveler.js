const gridTraveler = (m, n) => {
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
};

// O(2^(m + n)) time complexity 
// O(m + n) space complexity 
// height: n + m

// Memoization

const gridTraveler2 = (m, n, memo = {}) => {
  const key = `${m},${n}`;
  if (key in memo) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  memo[key] = gridTraveler2(m - 1, n, memo) + gridTraveler2(m, n - 1, memo);
  return memo[key];
};

// O(m * n) time complexity 
// O(m + n) space complexity 
// height: n + m

console.info(gridTraveler2(1, 1));
console.info(gridTraveler2(2, 3));
console.info(gridTraveler2(3, 2));
console.info(gridTraveler2(3, 3));
console.info(gridTraveler2(18, 18));
