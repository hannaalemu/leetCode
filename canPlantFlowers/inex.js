// Suppose you have a long flowerbed in which some of the plots are planted and some are not. However, flowers cannot be planted in adjacent plots - they would compete for water and both would die.

// Given a flowerbed (represented as an array containing 0 and 1, where 0 means empty and 1 means not empty), and a number n, return if n new flowers can be planted in it without violating the no-adjacent-flowers rule.

// Example 1:
// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: True
// Example 2:
// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: False
// Note:
// The input array won't violate no-adjacent-flowers rule.
// The input array size is in the range of [1, 20000].
// n is a non-negative integer which won't exceed the input array size.





var canPlaceFlowers = function(flowerbed, n) {
    let count = 0;
    
    if(n === 0) return true;
    
    if(flowerbed.length === 1) {
        if(flowerbed[0] === 0 && n <= 1) {
            return true;
        }
        else {
            return false;
        }
    }
    if(flowerbed.length === 2) {
        if(flowerbed[0] === 0 && flowerbed[1] === 0 && n <= 1) {
            return true;
        }
    }
    else {
        
        flowerbed.push(0);
        flowerbed.unshift(0);
    
    for(let i = 0; i < flowerbed.length; i++) {
      
      if(flowerbed[i] === 0 && flowerbed[i + 1] === 0 && flowerbed[i + 2] === 0 ) {
                flowerbed[i + 1] = 1;
                count++;
            }
        }
    }
    
    if(count >= n) {
        return true;
    }
    else return false;
};