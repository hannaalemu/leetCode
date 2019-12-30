// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].



function twoSum(nums, target) {
    for(let i = 0; i < nums.length; i++) {
      for(let j = nums.length - 1; j >= 0; j--) {
        if(nums[i] + nums[j] === target) {
          if(i != j) 
          return [i,j]
        }
      }
    }
  }
  
  function twoSumHash (nums, target) {
    let hash = {};
  
    for (let i = 0; i < nums.length; i++) {
     let num = nums[i];
     if(hash[target - num] !== undefined) {
       var result = [hash[target - num], i];
     }
     else {
       hash[num] = i;
     }
    }
     return result;
  }
  