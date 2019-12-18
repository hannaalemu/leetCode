

// Change the Roman number string into numerals!!!!for example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

// Example 1:

// Input: "III"
// Output: 3
// Example 2:

// Input: "IV"
// Output: 4
// Example 3:

// Input: "IX"
// Output: 9
// Example 4:

// Input: "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 5:

// Input: "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.



var romanToInt = function(str) {
    if(str.length < 1) {
      return;
    }

    let num = 0;

    let I = 1;
    let V = 5;
    let X = 10;
    let L = 50;
    let C = 100;
    let D = 500;
    let M = 1000;

    
    for(let i = 0; i < str.length; i++) {
      if(str[i] === 'I') {
        if(str[i + 1] === 'V' || str[i + 1] === 'X') {
         return num - I;
        }
         return num += I;        
      }

      if(str[i] === 'X') {
        if(str[i + 1] === 'L' || str[i + 1] === 'C') {
         return num - X;
        }
       return num += X;
      }

       if(str[i] === 'C') {
        if(str[i + 1] === 'D' || str[i + 1] === 'M') {
         return (num - C)
        }
        return num += C;
      }
      if(str[i] === 'M') {
        num += M;
      }
      if(str[i] === 'L') {
        return num += L;
      }
      if(str[i] === 'D') {
        return num += D; 
      }
      
    }
  
    return  num;

};

let test = 'MCMXCIV';

romanToInt(test);