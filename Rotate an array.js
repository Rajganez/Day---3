//Rotate an array by k times
//Using anonymous function
let arr = [10,9,8,7,6,5,4,3,2,1];
let k = 3;
let i = arr.length-1;
let rotate = function(arr, k){
while(k>0){
    arr.splice(0,0,arr[i]);
    arr.pop();
    k--;
    console.log(arr);
}
}
rotate(arr, k);
//Output
//[1, 10, 9, 8, 7, 6, 5, 4, 3, 2]
//[2, 1, 10, 9, 8, 7, 6, 5, 4, 3]
//[3, 2, 1, 10, 9, 8, 7, 6, 5, 4]

//------------------------------------------//

//Using IIFE functions

let arr = [10,9,8,7,6,5,4,3,2,1];
let k = 3;
let i = arr.length-1;
((arr, k) => {
while(k>0){
    arr.splice(0,0,arr[i]);
    arr.pop();
    k--;
    console.log(arr);
}
})(arr, k);

//Output
//[1, 10, 9, 8, 7, 6, 5, 4, 3, 2]
//[2, 1, 10, 9, 8, 7, 6, 5, 4, 3]
//[3, 2, 1, 10, 9, 8, 7, 6, 5, 4]