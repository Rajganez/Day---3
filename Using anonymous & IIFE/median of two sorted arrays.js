//Return median of two sorted arrays of the same size.

//Using anonymous function
let arr = [2,5,6,7,8,10,16,18,20];
let arr1 = [5,6,7,8,10,16,18,20];
let median = function(arr,arr1){
if(arr.length % 2 !== 0){
    let med = Math.round((arr.length / 2));
    console.log(arr.at(med-1));
}else{
    let med1 = Math.round((arr.length / 2));
    console.log(arr.at(med1-1),arr.at(med1));
}
if(arr1.length % 2 !== 0){
    let med = Math.round((arr1.length / 2));
    console.log(arr1.at(med-1));
}else{
    let med1 = Math.round((arr1.length / 2));
    console.log(arr1.at(med1-1),arr1.at(med1),"median of even array value is",((arr1.at(med1-1)+arr1.at(med1))/2));
}
}
median(arr,arr1);

Output:
8
8 10 median of even array value is 9

//------------------------------------------------------------------
//Using IIFE functions

let arr = [2,5,6,7,8,10,16,18,20];
let arr1 = [5,6,7,8,10,16,18,20];
((arr,arr1) =>{
if(arr.length % 2 !== 0){
    let med = Math.round((arr.length / 2));
    console.log(arr.at(med-1));
}else{
    let med1 = Math.round((arr.length / 2));
    console.log(arr.at(med1-1),arr.at(med1));
}
if(arr1.length % 2 !== 0){
    let med = Math.round((arr1.length / 2));
    console.log(arr1.at(med-1));
}else{
    let med1 = Math.round((arr1.length / 2));
    console.log(arr1.at(med1-1),arr1.at(med1),"median of even array value is",((arr1.at(med1-1)+arr1.at(med1))/2));
}
})(arr,arr1);

Output:
8
8 10 median of even array value is 9