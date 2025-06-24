// 1
let nums = 1234;
let num = 0;
while(nums>0){
    num += nums%10;
    nums = Math.floor(nums/10);
}
console.log(num)

//2
let number = 4;
const a = "*"
let b = "*"
while(number > 0)
{
    console.log(b)
    b += a;
    number --; 
}

//3
const q = 1;
const w = 2;
const e = 3;
let arr = [];
arr.push(q);
arr.push(w);
arr.push(e);
let t = 0;
let r = arr[t];
arr.forEach(function(num)
{
    if(r < num){
        r = num;
    }
})
console.log(r);

//4
let numbe = 32232
let y =0;
while(numbe> 0){
    numbe = Math.floor(numbe/10)
    y++;
}
console.log(y);
//5

let stert =44;
const end = 68;
while(stert<= end){
    if(stert%2==0){console.log(stert)}
    stert++;
}
   
//6

let my_numbers = 1234
let my_stringi = ""
while(my_numbers > 0){
    my_stringi += my_numbers % 10;
    my_numbers = Math.floor(my_numbers / 10)
}
    console.log(my_stringi)