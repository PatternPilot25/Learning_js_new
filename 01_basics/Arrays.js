// Arrays :an object which contains multiple data of similar or different type in single variable ..
//  the array can be resizable & dynamic in js
const arr = [1, 2, 3, 4, 5]      // declaring an array []
// console.log(arr[0])      //accesing first element from the array list
arr.push(16)        // pushing element from back
// console.log(arr)
// arr.pop()
// console.log(arr)    // pop element from back 
arr.unshift(15)     // complete array right shift hoga 1 se + 0 index p ye elemnt aayega 
// console.log(arr)
arr.shift()// first element of the array removed and rest are left shift by 1
console.log(arr)
console.log(arr.slice(1, 4))
console.log(arr)
console.log(arr.splice(1, 4))
console.log(arr)
/*

slice = in slice(start,end) start is included & end is excluded[not included] but there is no modification in original array that means original array not changed....remains same
splice(start ,count) = from the start index till the count (is the number of elements ) elements got removed from the original array 
[ 1, 2, 3, 4, 5, 16 ]
console.log(arr.splice(1, 4))
[ 2, 3, 4, 5 ]
*/


