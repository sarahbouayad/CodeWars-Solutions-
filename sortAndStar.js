function twoSort(s) {
    let sortedArr = s.sort();
    let firstString = sortedArr[0];
    let result = "";
    
    for (let i = 0; i < firstString.length; i++) {
      result += firstString[i] + "***";
    }
    
    return result.slice(0, -3); // remove the last "***" from the result
  }