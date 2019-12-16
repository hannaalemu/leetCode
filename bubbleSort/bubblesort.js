//Hanna - simplest implementation of quicksort
// Bubble sort
//Compare two values at a time, the first iteration results in the largest number ending at the last index
//Takes O(N)time

const bubbleSort = function (arr) {

    let len = arr.length;
      for(let i = 0; i < len; i++ ) {
        for(let j = 0; j < len; j++) {
  
          if(arr[j] > arr[j + 1]) {
            swap(arr, arr[j], arr[j + 1]);
          }
        }
      }
      return arr;
  }
  
  const swap = function (arry, a, b) {
    let temp = arry[a];
    arry[a] = arry[b];
    arry[b] = temp;
  };
  
  let test = [4, 3000, 5,1,7,8,3,0,6];
  
  console.log(bubbleSort(test));