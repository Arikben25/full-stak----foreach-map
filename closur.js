//1
function createCounter(x){
    
    return ()=>{x++
        return x;
    }
}
const c = createCounter(0) 
console.log(c())
console.log(c())
console.log(c())

//2
function secretHolder(s){
    return function get(){return s;}
    // function chenge(mas){s.toUpperCase;
    //     return s;
    //}
}
const f = secretHolder("ariel");
console.log(f.get())
