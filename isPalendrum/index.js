//Check to see if a string is a paleondrum(this can work for arrays as well) 

function isPalio (str) {
    if(str.length < 3) {
      return true;
    }
  
    else { 
      let mid = Math.floor(str.length/2);
      for(let i = 0; i < mid; i++) {
        if(str[i] != str[str.length - 1 -i]) {
          return false;
        }
      }
      return true;
    }
  }
  
  let test = 'slevels'
  
  console.log(isPalio(test));