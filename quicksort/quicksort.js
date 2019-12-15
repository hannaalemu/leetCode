//Hanna ------------quicksort is easy to understand. Given an array of length, we simply choose a pivot element(usually the first element) and
//compare it to other elements. We create empty left and right arrays, if the element is less than the pivot, we push it into the leftarray.
//if greater or equal to, push it into the right array

//Hanna - then we concat the qsort results of the left array, the pivot, and the right array. 



function qsort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const [pivot, ...rest] = arr;
    const left = [], right = [];
    rest.forEach( el => el < pivot ? left.push(el) : right.push(el) );
    return qsort(left).concat(pivot).concat(qsort(right));
}
let test = [4, 6, 3, 2, 9, 8, 7, 233, 0, 1, 5];

console.log(qsort(test));