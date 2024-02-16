let strarr = ['tamilnadu','kerala','andhra','karnataka','delhi','mumbai'];
let strarr1 = [];
let uppercase = (strarr) => {
for (let i in strarr){
let str = strarr[i].split("");
let str1 = str.shift();
let str2 = str1.toUpperCase();
console.log(str2+str.join('')); 
}
}
uppercase(strarr);
//Output
/* Tamilnadu
Kerala
Andhra
Karnataka
Delhi
Mumbai  */