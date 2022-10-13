// // Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:


function findNeedle(haystack) {
    // your code here
  //   have to write a function 
  //   it'll take an array, containing: 'needle'
  //   return 'found the needle at position'`${}` with the index 
  //   prep: parameter, return, example, pseudo 
  
  const needleIndex = haystack.indexOf('needle')
  return `found the needle at position ${needleIndex}`
  
  }