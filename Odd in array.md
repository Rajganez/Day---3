<div>
<h1>/* //Print odd numbers in an array using Anonymous function & IIFE<h1>
<h2>//using anonymous function<h2>
<p>let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
let oddNumber = [];
let odd = function(arr){
    for(let i in arr){
    if(arr[i] % 2 !== 0){
    oddNumber.push(arr[i]);     
}
    }
    console.log(oddNumber);
}
odd(arr);
//Output array (8) [1, 3, 5, 7, 9, 11, 13, 15] */
</p></div>

<div><h2>//using IIFE</h2>
<p>let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
let oddNumber = "";
((arr) => {
    for(let i in arr){
    if(arr[i] % 2 !== 0){
    oddNumber = arr[i];     
    console.log(oddNumber);
}
    }
})(arr);
/*Output array 
1
3
5
7
9
11
13
15 */
</p>
</div>