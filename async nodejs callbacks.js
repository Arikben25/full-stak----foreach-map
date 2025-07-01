import { randomInt } from "crypto"
import fs from "fs"

1
fs.readFile("textFile.text", 'utf8',(err,data)=>{
    if(err){
        console.log(err);
    return;
    }
    const d = data
    fs.stat("textFile.text",(err,stat)=>{
        if(err){
            console.log(err);
            return
        }
        const s = stat
        console.log(`the data is: ${d} the size is: ${s.size} bits, the date of ride is: ${s.birthtime}`);
    })
})

//2.0

fs.readdir("./",(err,files)=>{
    if(err){
        console.log(err);
        return
    }
    const arrfiles = files.filter((file) => {return fs.statSync("./"+file).isFile()
        //console.log(file);
    })

    arrfiles.forEach((f)=>{console.log(f)})
})

//2.1

fs.readdir("./",(err,files)=>{
    if(err){
        console.log(err);
        return
    }
    files.map((file) => {if(fs.stat("./"+file).isFile())
        console.log(file);
    })    
})

//3


const f = function rec(num) {
    if (num > 0) {
        setTimeout(() => {
            console.log(num)
            rec(num - 1)}, 1000)
    } else {
        console.log(`timeOFF`);
        return;
    }

}
f(5)

//4


fs.readFile("./textFile.text",(err,data)=>{
    if(err)
        return
    let d =data.toString().split("\n")
    console.log(d.length)
    let rand = Math.floor(Math.random()*d.length)
    if(d[rand] !==""){
            console.log(d[rand]);
    }
    else{console.log("the line is empti");}

})
