// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

/**
 * @param {number[]} nums
 * @return {number}
 */


var majorityElement = function(nums) {
    let hash = {};

  for(let i = 0; i< nums.length; i++) {
      hash[nums[i]] = hash[nums[i]] + 1 || 1;
  }

  let max = -Infinity;
  let maxnum;

  for(let key in hash) {
    if(hash[key] > max) {
      max = hash[key];
      maxnum = key;
    }
  }
 
  return maxnum;

};