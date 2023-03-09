let areaOrPerimeter = function (l, w) {
    let area = l * w;
    let perimeter = 2 * (l + w);
    if (l === w) {
      return area;
    } else {
      return perimeter;
    }
}