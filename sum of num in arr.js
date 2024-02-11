//Sum of all numbers in an array
//Using anonymous function
let arr = [1,2,3,4,5,6,7,8,9,10];
let sum = function(arr){
let summarr = 0;
    for(let i = 0 ; i < arr.length ; i++){
   summarr += arr[i];
}
console.log(summarr);
}
sum(arr);
//Output : 55

//Using IIFE functions
let arr = [1,2,3,4,5,6,7,8,9,10];
((arr) => {
let summarr = 0;
    for(let i = 0 ; i < arr.length ; i++){
   summarr += arr[i];
}
console.log(summarr);
})(arr);
//Output : 55