//1
function User(name){
    this.name = name
}
User.prototype.sayName = function (){
        console.log(`The name is: ${this.name}`)
}

//2
const obj = {
    word:"word",
    
    fr:function aa(){
        console.log(this.word)
        const Farre =()=>{console.log("this.word")}
        Farre()
    }

}
obj.fr()
//3

const objec= {
    name:"arik",
    printName:function (){
        console.log(this.name)
    }
}

function printi(func){
    func()
}
printi(()=>objec.printName())
//4
class Builder{
    constructor(){
        this.text = ""
    }
    write(text){
        this.text = text
        return this
    }
    uper(){
        this.text = this.text.toUpperCase()
        return this
    }
    print(){
        console.log(this.text)
    }
}
