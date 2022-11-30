function nextPal(val) {
    /* your code here */
//   problem in CW about palindrome numbers and strings. 
//   given positive interger val
//   param is val 
//   write function next_pal()
//   return the smallest palindrome number higher than val ie 11 to 22 
  
// let nextPalindrome = [];
  
// let valReverse = val.toString().split('')
  
// if(valReverse == valReverse.reverse().join('')){
//   for(let i = 0; i < val.length; i++){
//     if(!valReverse == valReverse.reverse().join('')){
//       return false
//     }else{
//       return nextPalindrome.push()
//     }
//   }
// }
for(let i = val+1; true; i++ ){
  if([...String(i)].reverse().join('') == i){
    return i 
  }
}

}