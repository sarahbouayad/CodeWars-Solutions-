function saleHotdogs(n){
    //   complete function that accepts 1 parameter
    //   params: n
    //   n < 5 return 100 
    //   n >= 5 and n < 10 return 95 
    //   n >= 10 return 90
      if(n < 5){
        return n * 100
      }else if(n >= 5 && n < 10){
        return n * 95
      }else if(n >= 10){
        return n * 90
      }
    }