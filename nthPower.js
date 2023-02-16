function index(array, n){
    if (n < 0 || n >= array.length) {
        return -1;
      }
      
      return Math.pow(array[n], n);
    }