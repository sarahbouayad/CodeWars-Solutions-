// Write a function that returns both the minimum and maximum number of the given list/array.



function minMax(arr){

  //  PREP
  // parameter: arr
  // return 
  // example
  // psuedo 
  
  // function that return both min and max number of the given list/array
  // could use Math.min and Math.max to return these numbers 
    
  let min = Math.min(...arr)
  let max = Math.max(...arr)
  
  return [min, max]

}