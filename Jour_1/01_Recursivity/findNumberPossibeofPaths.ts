export function findNumberPossibeofPaths(numberofStairs): number {
  if (numberofStairs < 0) return 0;
  if (numberofStairs === 0) {
    return 1;
  }
  return (
    findNumberPossibeofPaths(numberofStairs - 1) +
    findNumberPossibeofPaths(numberofStairs - 2) +
    findNumberPossibeofPaths(numberofStairs - 3)
  );
}
