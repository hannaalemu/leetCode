// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

// Example 1:

// Input: [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
//              Total amount you can rob = 1 + 3 = 4.
// Example 2:

// Input: [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
//              Total amount you can rob = 2 + 9 + 1 = 12.



// I aproached this problem using memoization, or storing values that we already calculated at a given point. In this case it's an array called memo.

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    //If we have no houses or only one house, then the maximum amount we can rob is either 0 or that house.
    if(nums.length === 0) {
     return 0;
   }
   if (nums.length === 1) {
     return nums[0];
   }
 
   //Initiate the memoization array
   let length = nums.length;
   let memo = [];
 
   //Max money we can rob at the first house is that house itself
   memo[0] = nums[0];
   //Max we can rob of two houses is the larger of the two, since we can't rob adjacent houses
   memo[1] = Math.max(nums[0], nums[1]);
 
   //We loop through the other houses, and for each house at i, the max we can rob is either the sum of itself and the previous previous house's memoized max, or the previous house's memoized max
   for(let i = 2; i < length; i++) {
     memo[i] = Math.max(nums[i] + memo[i - 2] , memo[i - 1]);
   }
   //At last we return the memoized max at the end of the houses to determine what  is the max amount of money we can rob
   return memo[length - 1];
 };