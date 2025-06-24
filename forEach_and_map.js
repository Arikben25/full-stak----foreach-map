//1

function doubleValues(arrNumbers){
    let  new_ARR = arrNumbers.map((num)=>{return num * 2})
console.log(new_ARR)
}
doubleValues([1,2,3,4])

//2
function onlyEvenValues(allNumbers){
    let evenNumbers = allNumbers.filter(num => num % 2 == 0)
console.log(evenNumbers)
}
onlyEvenValues([1,2,3,4,5,6,7])


//3
function showFirstAndLast(arr){
    let newARR = arr.filter((vul,ind)=> {
    return typeof(vul)==="string" && (ind==0 || ind == arr.length -1)})
console.log(newARR)
}
showFirstAndLast(["asd",2,"ddd",4,"aaa"])

//4
function vowelCount(str){

    const vawels = "eiauh"
    let dict = {}
    str = str.toLowerCase().split("")
    .filter(char =>
       vawels.includes(char))
    .forEach((char) => {dict[char] = (dict[char] || 0) + 1;})
    return dict
}
console.log(vowelCount("asa")
)

//5

function capitalize(str){
    str = str.toUpperCase()
    console.log(str)
}
capitalize("asas")