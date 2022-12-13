// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).


function powersOfTwo(n){
    let arr = []
    for (let i = 0; i <= n; i++) arr[i] = 2**i
    return arr
  }