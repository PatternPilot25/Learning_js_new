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
// console.log(arr)
// console.log(arr.slice(1, 4))
// console.log(arr)
// console.log(arr.splice(1, 4))
// console.log(arr)
/*

slice = in slice(start,end) start is included & end is excluded[not included] but there is no modification in original array that means original array not changed....remains same
splice(start ,count) = from the start index till the count (is the number of elements ) elements got removed from the original array 
[ 1, 2, 3, 4, 5, 16 ]
console.log(arr.splice(1, 4))
[ 2, 3, 4, 5 ]
*/
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
// properties of Arrays
// 1. merging 2 Arrays 
     //push dont use it it will push one array as an element in another array.
     const ar= [6,7,8,9];  
    //  arr.push(ar);
     console.log(arr)    // [ 1, 2, 3, 4, 5, 16, [ 6, 7, 8, 9 ] ]
    //  concat :can be used it will return a new array 
            //  const new_arr=arr.concat(ar)
    // console.log(new_arr)   result:[1, 2, 3, 4, 5,16, 6, 7, 8, 9]
    // * best one is spreding 
          const nar=[...arr,...ar]  //because we can merge as many arrays as we want
        //   console.log(nar)     result:[ 1, 2, 3, 4, 5,16, 6, 7, 8, 9]
/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//  2.use of flat
const up_Arr=[1,2,3,[1,2,4,5],8,9,[2,3,4,[7,8]]];
console.log(up_Arr.flat(Infinity))    
// some more methods

console.log(Array.isArray("Chaman"))
console.log(Array.from("Chaman"))
console.log(Array.from({name : "Chaman"}));//its gives an empty array to get an non-empty array we have to specify ki key wala array chahiya ya value wala -will learn later
let s1=100
let s2=200
let s3=300
console.log(Array.of(s1,s2,s3))
/*
- of → "One-by-one values"     taken to built array
- from → "From something iterable" taken to built array 

*/