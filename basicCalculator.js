const calculate = function calculate(a, o, b) {
    if(o === "+") { 
     return a + b;
    }else if(o === "-") {
      return a - b;
    }else if(o === "/") { 
     return b !== 0 ? a/b : null; 
    }else if(o === "*"){
     return a * b;
   }else{
     return null
   }
  }