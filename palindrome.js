function isPalindrome(x) {
    // your code here
  
    let string = x.toLowerCase()
    let backward = string.split('').reverse().join('')
    
    return string == backward
  
  }