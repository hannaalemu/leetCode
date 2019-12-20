// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false
// Example 4:

// Input: "([)]"
// Output: false
// Example 5:

// Input: "{[]}"
// Output: true



function validate(str) {

    if(str.length === 0) {
      return true;
    }
    if(str.length % 2 != 0) {
      return false;
    }
  
    else {
  
      let stack = [];
  
      for(let i = 0; i < str.length; i++) {
            
  
        if(str[i] === '(' || str[i] === '{' || str[i] ==='[') {
          stack.push(str[i]);
        }
        else {
         
  
          if(str[i] === ')' && stack[0] === '('|| str[i] === '}' && stack[0] === '{'|| str[i] === ']' && stack[0]=== '[') {
            stack.shift();
          }
        }
      }
      console.log(stack)
  
      if(stack.length > 0) {
        return false;
      }
      else return true;
    }
  }
  let test = '{}[][]((';
  
  validate(test);
  
  