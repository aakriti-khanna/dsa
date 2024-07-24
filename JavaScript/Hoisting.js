// Functions in Js
// Function Hoisting

// functionName();
// console.log(x);
// function functionName(){
//     console.log("Roadside Coder");
// }
// // console.log(x); where as here undefine since VAR is hoisted 
// // but the value shall be undefined

// var x=5;
// console.log(x); if we kept here it will give 5


// //////////////////////////
// q-9
// var x=22

// var fun= function(){
//     console.log(x);
//     var x=20;
// };
// fun();

// Ans Undefined 



//////////////////////////////////////
// PARAMS   vs ARGU

// function square(nums){ //params
//     console.log(nums* nums);
// }
// square(5); //Arguments


// SpreadOPerator    
// function square(...nums){ //params
//     console.log(nums[0]* nums[1]);
// }

// var arr=[6 ,5]
// square(...arr); //Arguments

 

// function square(...nums){ //params
//     console.log(nums);
// }

// var arr=[6 ,5]
// square(...arr); //Arguments


///////////////////
// RaceOperator
// function square(nums1 ,nums2){ //race operator
//     console.log(nums1 * nums2);
// }

// var arr=[4 ,5]
// square(...arr); // spread



// Res Operator coes at last

//  const fn=(a,x,y ,...numbers)=>{
//     console.log(a, x,y,numbers);
//  };

//  fn(5,6,3,7,8,9);

///////////////////////////////////////////////////
// Call BAck func

// function greet(name){
//     alert("hello" +name); 
// }

// function pro(callback){
//     var name=prompt("please enter your name");
//     callback(name);
// }

// pro(greet);



// call back func is a func whne we are passing a function inside another function
// document.addEventListener("click",function(params){

// })
 

///////////////////////////////////////////
// Arrow function

// const add= (firstNum ,secondNum)=>{
//     return (firstNum +secondNum);
// }
// add(1,2);


// Arrow func vs Regular Func

// function square(num){
//     return num*num;
// }

// ///////////////////////////

// function fn(){
//     console.log(object);
// }
// // Implicit  "return " Keyword
// const squareArr =(num)=> num*num;

// 3- ARguments
// function fn(){
//     console.log(arguments);
// }
// fn(1,3,2);

////////////////////////
// you cant pass arguments inside arrow function
// const fnArrow= ()=>{
//     console.log(arguments);
// }
// fnArrow(1,3,2);


// let user={
//     username:"Aakriti Khanna",
//     rc1:()=>{
//         console.log("subscribe to " + this.username);
//     },

//     rc2(){
//         console.log("subscribe to " + this.username);
//     },
// };


// rc1 is defined as an arrow function (rc1: () => {...}). Arrow functions do not have their own this context. Instead, they inherit the this value from the surrounding code at the time they are defined. In this case, this inside rc1 refers to the user object.
// rc2 is defined using the shorthand method syntax (rc2() {...}). Shorthand methods do have their own this context, and this inside rc2 refers to the   user object as well.

// Arrow Functions: Arrow functions do not have their own this value. Instead, they inherit the this value from the enclosing lexical context (the context in which they are defined).
// user.rc1();
// user.rc2();
