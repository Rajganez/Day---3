<div>
<h1>Print odd numbers in an array using Anonymous function & IIFE<h1>
<h2>Using anonymous function<h2>
<p>let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];<br>
let oddNumber = [];<br>
let odd = function(arr){<br>
    for(let i in arr){<br>
    if(arr[i] % 2 !== 0){<br>
    oddNumber.push(arr[i]);<br>     
}<br>
    }<br>
    console.log(oddNumber);<br>
}<br>
odd(arr);<br>
<b>Output array (8) [1, 3, 5, 7, 9, 11, 13, 15] */</b><br>
</p></div>

<div><h2>Using IIFE</h2>
<p>let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];<br>
let oddNumber = "";<br>
((arr) => {<br>
    for(let i in arr){<br>
    if(arr[i] % 2 !== 0){<br>
    oddNumber = arr[i];     <br>
    console.log(oddNumber);<br>
}<br>
    }<br>
})(arr);<br>
<b>Output array<br> 
1<br>
3<br>
5<br>
7<br>
9<br>
11<br>
13<br>
15 <br></b>
</p>
</div>