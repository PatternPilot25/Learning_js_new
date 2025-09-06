/* singeleton ->when object is defined by using constructor 
syntax object.create */
//  objects literals 
const mysymb=Symbol("key1")   
const obj={
name : "chaman",
last_name :"jha",
Email:"chamanjha2003@gmail.com",
rollnum : 6,
[mysymb] :"key2",/* now it is used as symbol [],one more thing we have to declare symbol before it declared in object as a reference */
"fullname": "chamanjha"
}
console.log(obj);
// console.log( obj.rollnum)
// console.log(obj.fullname) 
// // see we cant use dot operator there 
// // console.log(obj["full name"]) -> will use this syntax its more powerful when there is special character spaces something
// console.log(obj["fullname"])
console.log( obj.mysymb)
console.log(typeof obj.mysymb)
Object.freeze(obj) /* iske baad object mai changes propagate nahi karega ..*/
/* Notes->
object -> 2 types;
1.singelton -> const obj= new object();
object.create();
objects are created through constructor
2. objects literals 
const obj={};
obj.id="xyz";
obj.pswd="mno";
All get into that object;
#merging objects
const obj3={...obj1,...obj2}->spreading returns a new object which is merge of the two or more
# 🔹 Nested Objects:
- You can nest objects infinitely
we can place object in object in object ....infinity(looping) too .. access are simple as we use 
object.freeze(objectname)-> modification iske baad propagete nahi karegi
object.keys(object_name)->  Returns array of keys
object.values(object_name)-> Returns array of values
object.entries(object_name)->- Returns array of [key, value] pairs
even arrays contains many object 
symbol -> before using [symbol] in object u have to declare outside the object for reference 
- Declare symbol first, then use it as a key
🔹 Property Access:
- Dot notation (obj.key) → For simple keys
- Bracket notation (obj["key"]) → For keys with spaces, special characters, or dynamic access
*/
