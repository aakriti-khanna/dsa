// const user={
//     name:"Aaks",
//     age:24,
//     isTotal:true,
// };

// for(key in user){

//     console.log(user[key]);
// }

// return Answer
// Aaks
//  24
//  true


// console.log(user.name);//Aaks

// let nums={
//     a:100,
//     b:200,
//     title:"My Nums",
// };
//       multiplyByTwo(nums);

// function multiplyByTwo(obj){
//     for(key in  obj){
//         if(typeof obj[key]=="number"){
//             obj[key]*=2;
//         }
//     }
// }
// console.log(nums);



// const a={};
// const b={ key: "b"};
// const c={ key: "c"};

// a[b]=123;
// a[c]=458;

// console.log(a[b]);
//console.log(a);  //Ans :- { '[object Object]': 458 }

// What is Json stringify  and Json Parse??

// const user ={
//     name:"Aaks",
//     age:34,
// };

// const strObj= JSON.stringify(user);
// localStorage.setItem("test",strObj)
// // console.log(JSON.parse(strObj));   
// console.log(JSON.parse(localStorage.setItem("test")));   




// Use Spread Operator
// const user={name: "Lydia",age:21};
// console.log([..."user"]);


// const admin={admin:true ,...user};

// console.log(admin);
// ANs

// admin: true age: 21 name: "Lydia"[[Prototype]]: Object




// const setting={
//     username :"Piyush",
//     level:90,
//     health:90,
// };

// const data=JSON.stringify(setting,["level","health"]);
// console.log(data);




// let user={
//     name:"Piyush",
//     age:24,
//     fullname:{
//         first: "Aaks",
//         last:"Agarwal"
//     },
// }

// const name="Roadside Coder";

// const{
//     fullname:{first},

// }=user;
// console.log(first  );

// function getItems(fruitlist,favoriteFruit,...args){
//     return[...fruitlist,favoriteFruit,...args];
// }
// console.log(getItems([["banana","apple"],"pear","prdf" ]))



// let c={greeting:"HEY"}
// let d;
// d=c;
// c.greeting="hello";
// console.log(d.greeting);  //hello
// // here we are simply providing reference not copying all Element from object


// const value={number :10};

// const multiply=(x={...value})=>{
//     console.log((x.number*=2));
// };
// multiply();
// multiply();
// multiply(value);
// multiply(value);








// function changeAgeandReference(person){
//     person.age
// }














// const person = {
//     name: 'Alice',
//     address: {
//         city: 'Wonderland',
//         street: 'Rabbit Hole 42'
//     }
// };

// const updateAddress = (p = { ...person }) => {
//     p.address.city = 'Looking Glass';
//     console.log(p.address.city);
// };
