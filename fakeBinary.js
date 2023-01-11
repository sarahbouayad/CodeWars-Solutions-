function fakeBin(x){
    return x.split("").map(num => num < 5 ? '0' : '1').join("");
  }