
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.




function removeSmallest(numbers) {

    const array = numbers.slice(0)
  
    let min = numbers.indexOf(Math.min(...numbers))
    console.log(min)
    array.splice(min, 1)
  
    return array
    
  // for(let i =1; i<numbers.length; i++){
  //   if(numbers[i] > min){
  //     return numbers - min
  //   }
  // }
  }