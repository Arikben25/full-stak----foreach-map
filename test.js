


// const stringi = "ArielBenPazi" 
// const arr = stringi.split("");
// console.log(arr)
// let my_arr= [];
// for (let i = 0; i<arr.length; i++)
//     {
//     const num = arr[i].charCodeAt();
//     if(num<=90 && num>=65){
// my_arr.push(i);
//     }
//     }
// console.log(my_arr)

// const obj = {name:["ariel","sara","adi"],age:[25,23,1]}
// for (const key in obj){
//     console.log(key, obj.key)
// }



//-------------------------------------------------------------
// 23.06.25

// console.log(process.argv);
// console.log(process.argv[3])

// let a = "arik"
// let b = "ben pazi"
// b,a = a,b
// console.log(b)

//2
// const arr = [
// ["a","d","e","X","E"],
// ["X","v","X","x","r"]
// ]
// let my_arr = []
// for(let i = 0; i < 2;i++ )
//     {
//         for(let j = 0; j< 5; j++)
//             {
//                 if (arr[i][j]==="X")
//                     {
//                         my_arr.push([i,j])
//                     }
//             }
//     }
// console.log(my_arr)

// // 3

// let family = {
//   parents: {},
//   children: [
//     { name: "Ali" },
//     { name: "Lea" },
//     { name: "Noa" }
//   ]
// };
// console.log(family.children[2].name)
// let cheld = [];
// for(let i = 0; i < family.children.length ; i++)
//     {
//         cheld.push(family.children[i].name)

//     }
// console.log(cheld.join(","));

// // function

// function my_name(name=""){
//     let aper_name = name.toLocaleUpperCase()
//     console.log(aper_name)
// }
// my_name("ariel")

// let add = (num1,num2)=>{return num1+num2}
// let minus = (num1, num2)=> {return num1 - num2}
// let multiply = (num1,num2)=> {return num1 * num2}
// let divide = (num1, num2)=> {return num1/num2}
// function math(fn){
//     console.log("start")
//     console.log(fn)
//     console.log("end")
// }

// math(add(2,3))
// //

// const cars = [
//     {"bmw":250},
//     {"tesla":200},
//     {"toyota":150},
//     {"sirion":20 }
// ]


// cars.forEach((car)=>{
//     console.log(Object.values(car))})

// const new_map = cars.map((vul)=>{if(Object.values(vul)) Object.keys(vul)})
// console.log(new_map)

//1
let fruits = ["apple", "banana", "mango"];
fruits.splice(2,0,"orang")
console.log(fruits[2])
//2
let colors = ["red", "green", "blue", "yellow"];
colors.splice(2,1)
for(let i =0; i< colors.length; i++){
    console.log(colors[i])
}
//3
let nums = [10, 20, 30, 40, 50];
const newarr = nums.slice(1,4)
for(let i =0; i< newarr.length; i++){
    console.log(newarr[i])}

//4
let names = ["Dan", "Ron", "Maya"];
let str= names.join(",")
console.log(str)
let me = {
    name:"ariel",
    age:25,
    hobbies:["ride","program"],
    favFoods:["banana","beard"]
}
console.log(me)