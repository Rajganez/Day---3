//Return all the palindromes in an array
let arr = ["madam","civic","guvi","india","radar"];
let palindrome = (arr)=>{
let str = "";
let str1 = "";
    for (let i in arr){
       str = arr[i];
        for(let j = str.length-1 ; j >= 0 ; j-- ){
            str1 += str[j];    
            }
            if(str === str1){
                console.log(str);
                str1 = "";
            }else{
                str1 = "";
                        }
        }
}
palindrome(arr);

//Output: 
//madam
//civic
//radar