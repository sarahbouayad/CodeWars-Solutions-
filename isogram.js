/* An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case) **/



function isIsogram(str){
    str = str.toLowerCase()
    for (let i = 0; i < str.length; i++){
      for(let g = i+1; g < str.length; g++){
        if(str[i] === str[g]){
          return false
        }
      }
    }
    return true
  }
  