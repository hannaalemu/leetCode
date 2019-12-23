// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.
 


/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.min = +Infinity;
    this.stack = [];
  };
  
  
  MinStack.prototype.push = function(x) {
     
      return this.stack.push(x);
  };
  
  /**
   * @return {void}
   */
  MinStack.prototype.pop = function() {
     return this.stack.pop();  
  };
  
  /**
   * @return {number}
   */
  
  MinStack.prototype.top = function() {
    let len = this.stack.length;
    return this.stack[len - 1];
  };
  
  /**
   * @return {number}
   */
  MinStack.prototype.getMin = function() {
     let min = +Infinity;
      for(let i = 0; i < this.stack.length; i++) {
        if(this.stack[i] < min) {
          min = this.stack[i];
        }
      }
        return min;
  };
  
  /** 
   * Your MinStack object will be instantiated and called as such:
   * var obj = new MinStack()
   * obj.push(x)
   * obj.pop()
   * var param_3 = obj.top()
   * var param_4 = obj.getMin()
   */