function points(games) {
  
    const points = games.reduce((total, [x, _ , y]) => total + (x > y ? 3 : x === y), 0)
    
    return points
}