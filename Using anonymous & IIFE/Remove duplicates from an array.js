//Remove duplicates from an array
//Using anonymous function
let arr = [1,2,3,4,4,5,5,6,6,6,7,8,9,10];
let arr1 = [];
let duplicates = function(arr) {
for (let i in arr) {
    if(arr1.indexOf(arr[i]) === -1) {
        arr1.push(arr[i]);
    }
}
console.log(arr1);
}
duplicates(arr);

//Output:
//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//--------------------------------------------------------

//Using IIFE function

let arr = [1,2,3,4,4,5,5,6,6,6,7,8,9,10];
let arr1 = [];
((arr) => {
for (let i in arr) {
    if(arr1.indexOf(arr[i]) === -1) {
        arr1.push(arr[i]);
    }
}
console.log(arr1);
})(arr);

//Output:
//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
