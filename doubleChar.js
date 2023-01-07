function doubleChar(str) {
    let string = '';
    for(let i = 0; i < str.length; i++){
    string += str.charAt(i) + str.charAt(i);
    }
    return string; 
  }
  