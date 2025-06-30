function Car(type,year){
    this.type = type;
    this.year = year;
    this.drive = function drive(){
        console.log(`the car ${this.type}  from ${this.year}`)
    }
}
const c = new Car("toyota",1999);
c.drive()


function myNew(constructorFunc, ...args) {
  const obj = {}; // 1. יצירת אובייקט חד
  obj.__proto__ = constructorFunc.prototype; // 2. חיבור לפרוטוטייפ
  constructorFunc.apply(obj, args); // 3. הפעלת הקונסטרקטור עם this = obj
  return obj; // 4. החזרת האובייקט
}
o=myNew(Car,"tesla",2025)
o.drive()