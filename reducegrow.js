function grow(x){
    // given a non-empty array of intergers, 
    //   return the result of multiplying the values together in order
    //   P: array of intergers
    //   R: result of values 
    //   E: [1,2,3,4] => 1 * 2 * 3 * 4 = 24
    //   P: using the reduce method
    
    const product = x.reduce(
    (previousValue,currentValue) => previousValue * currentValue
    );
    return product
    }

