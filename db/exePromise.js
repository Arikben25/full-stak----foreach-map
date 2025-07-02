import fs from "fs";

const pata = "./db.txt";

fetch("https://classroom.google.com/c/Nzg3ODQ5OTEzNjUw").then((res) =>{
    return res.text();
}).then((data)=>{
    console.log(data);
}).catch((err)=>{console.log(err);})

//1

const timerName = function mypromise(name,delay){
    return new Promise((res,rej)=>{
        setTimeout(() => {
                res("Hello " + name);
        }, delay);
    })
}

timerName("arik",3000).then((data)=>{
    console.log(data);
})

//2

const readFileContent = function(pata){
    return new Promise((res,rej)=>{
        fs.readFile(pata,"utf-8",(err,data)=>{
            if(err){rej(err)}
            res(data)
        })
    })
}
readFileContent(pata).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err.message);
})

//3

const randomOperation = ()=>{
    let rand = Math.floor( Math.random()*2)
    return new Promise((res, rej)=>{
        if(rand==1)res("Success!")
        else{rej("Failure!")}
    })
}

randomOperation().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})

//4
function raceTimers(name,timer){
   return new Promise((res,rej)=>{
        setTimeout(() => {
            res(`IM ${name} I WIN`)
        }, timer);
   })
}
const a = raceTimers("A",1000)
const b = raceTimers("B",4000)

Promise.race([a,b
]).then((data)=>{console.log(data);})