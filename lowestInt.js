function sumTwoSmallestNumbers(numbers) {  
  
    let first = Math.min(...numbers);
   numbers.splice(numbers.indexOf(first),1);
    let second = Math.min(...numbers);
      
     return first + second;
 };