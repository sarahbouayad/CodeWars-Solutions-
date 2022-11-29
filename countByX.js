function countBy(x, n) {
    //   console value x, n, 1, 10
    // write a function that takes two arguments that will return an array of the first n multiple of x
    // the results as an array 
    // map will iterate over every element, and return the result as an array 
    // given num and num of times will be positive numbers greater than 0
    // starts at x -> index is multiples of n 
    // we want it to countby parameters 
      
      let z = [];
    for(let i = 1; i <= n; i++){
      z.push(i * x)
    }
      return z;
    }