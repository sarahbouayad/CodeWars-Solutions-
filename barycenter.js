function barTriang(p1, p2, p3){
    // Find the midpoint of the line segment AB
    let midAB = [(p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2];
    // Find the midpoint of the line segment AC
    let midAC = [(p1[0] + p3[0]) / 2, (p1[1] + p3[1]) / 2];
    // Find the midpoint of the line segment BC
    let midBC = [(p2[0] + p3[0]) / 2, (p2[1] + p3[1]) / 2];
    // Find the x-coordinate of the centroid
    let xO = (midAB[0] + midAC[0] + midBC[0]) / 3;
    // Find the y-coordinate of the centroid
    let yO = (midAB[1] + midAC[1] + midBC[1]) / 3;
    // Round the results to 4 decimal places
    xO = Math.round(xO * 10000) / 10000;
    yO = Math.round(yO * 10000) / 10000;
    // Return the coordinates of the centroid as an array
    return [xO, yO];
  }