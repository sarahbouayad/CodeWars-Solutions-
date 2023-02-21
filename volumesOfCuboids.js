const findDifference = (a, b) => Math.abs(a.reduce((acc, cur) => acc * cur) - b.reduce((acc, cur) => acc * cur));
