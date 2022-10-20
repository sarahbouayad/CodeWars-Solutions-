// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.




function findAverage(array) {
    // your code here
    if(array.length > 0){
    return array.reduce((a, b) => (a + b)) / array.length;
      
    }else {return 0}
    
  }
  