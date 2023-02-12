function nearestSq(n){
    // Find the square root of n
    const root = Math.sqrt(n);
  
    // Check if n is already a perfect square
    if (Number.isInteger(root)) {
      return n;
    }
  
    // Find the nearest perfect square
    const lowerSq = Math.floor(root) ** 2;
    const upperSq = Math.ceil(root) ** 2;
    const lowerDiff = n - lowerSq;
    const upperDiff = upperSq - n;
    return lowerDiff < upperDiff ? lowerSq : upperSq;
  }