const findMax = function(array) {
    let max = -Infinity;
    let maxSoFar = 0;
  
    for(let i=0; i<array.length; i++) {
      max = Math.max(max, maxSoFar += array[i]);
      maxSoFar = Math.max(maxSoFar + array[i], 0); 
    }
  
    return maxSoFar;
  }
  
  let arr = [10, 0, -15, 5, 9, 3];
  
  findMax(arr);
  