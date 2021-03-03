/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  let x = n;
    
    if (x == 0) {
      x = 1;
    };
    
    while (n>1) {
      n = n-1;
      x = x *n;
    };
    
    return x;
    
  };

