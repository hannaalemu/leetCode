// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:

// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
// Example:

// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// Output: [1,2,2,3,5,6]


var merge = function(nums11,m,n,nums2) {
    let nums1 = nums11.slice(0,m);
    console.log(nums1);

for(let i = 0; i < nums2.length; i++) {
  nums1.push(nums2[i]);
}
for(let j = 0; j < nums1.length; j++) {
  for(let k = j+1; k< nums1.length; k++) {
    if(nums1[j] > nums1[k]) {
      let temp = nums1[k];
      nums1[k] = nums1[j];
      nums1[j] = temp;
    }
  }
}

return nums1;
};

let nums11 = [1,2,3,0,0,0,0,0];
let nums21 = [2,9];   
x = 3, y = 2
console.log(merge(nums11,x, y, nums21))