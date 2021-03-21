const gridTraveler = (m, n) => {
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
};

// O(2^(m + n)) time complexity 
// O(m + n) space complexity 
// height: n + m

console.info(gridTraveler(1, 1));
console.info(gridTraveler(2, 3));
console.info(gridTraveler(3, 2));
console.info(gridTraveler(3, 3));
console.info(gridTraveler(18, 18));
