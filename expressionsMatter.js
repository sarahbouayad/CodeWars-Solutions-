function expressionMatter(a, b, c) {
    let max = 0;
   const expressions = [
     a + b + c,
     a + b * c,
     a * b + c,
     a * b * c,
     (a + b) * c,
     a * (b + c)
   ];
   for (let expression of expressions) {
     if (expression > max) {
       max = expression;
     }
   }
   return max;
 }