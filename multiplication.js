
// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.




function simpleMultiplication(number) {
    // your code........
// function to multiply number by 8 if its even and by nine otherwise. 
//   an even number is divisible by 2 modulus 
//   write conditional statement
let even = number%2 
  
if(even == 0){
  return number * 8
} else if(!even == 0){
  return number * 9
}
}