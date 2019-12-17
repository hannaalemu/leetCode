//Question 1 ---------
//GIven an array of integers, create a function that prints out the number, and it's index, at a timeout of 3 seconds

let nums = [0, 1, 2, 3, 4];

function prnt (arr) {
  for(let i = 0; i < arr.length; i++) {
    setTimeout(function() {
      console.log('This is ' + arr[i] + 'at ' + i);
    }, arr[i] * 2000)
  }
}

console.log(prnt(nums));

//QUestion 2 -------------------------
//Given a string, return the character that is most commonly used in the string.

function mostChar (str) {
    let chars = {};
    let max = 0;
    let freqChar = '';
   
    for( let character of str) {
      chars[character] = chars[character]++ || 1;
    }
   
    for(let char in chars) {
      if(chars[char] > max) {
        max = chars[char];
        freqChar = char;
      }
    }
   
        return freqChar;
   
   }
   
   let test='aaaabccccccccffffffffffffffffffffffff';
   
   console.log(mostChar(test));