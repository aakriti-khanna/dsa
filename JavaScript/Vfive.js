// Closures in js

// var username= "RoadsideCoder";
// // global scope
// function local(){

//     // local scope
//     console.log(username);
//     // we can access the username from global scope
// }
// local()

// //////////////////////////////////////////////

// we can't access the username from inside the functional  scope
//     // in this case

// // global scope
// function local(){
//     var username= "RoadsideCoder";
//     // console.log(username);
//     // local scope

//
// }
// console.log("username" ,username);
// local();

/////////////////////////////////////////////////

//  functionke andar initialise krke
// uski calling ho skti hai dusre local function mai
// function subscribe(){
//     var name="Roadside Coder";
//     function displayName(){
//         // displayName() is a closure
//         alert(name);

//     }
//     displayName()
// }

// subscribe();

// function makeFunc(){

//     var name="Mozilla"
//     function displayName(){
//         console.log(name );
//     }
//     return displayName;
// }
// // 1 wayyyyy
// //  var myfunc =makeFunc();
// //  myfunc();
// //  2n wayyyyyyyyyy
// makeFunc(5)(); //it can print this way also as thre is
// // nested functom {makeFunc(5) through this we are
// // invoking only 1 function}

///////////////////////////////////////////////////////
// closure scope chain

// var username="kish"
// 1 st way
// function makeFunc(username){

//     var name="Mozilla"
//     function displayName(num){
//         console.log(name ,num ,username);
//     }
//     return displayName;
// }

// makeFunc("kish")(5);

// 2nd  wayyy
// var username="kish"
// function makeFunc(){

//     var name="Mozilla"
//     function displayName(num){
//         console.log(name ,num ,username);
//     }
//     return displayName;
// }

// makeFunc()(5);

// 3rd wayy

// var e=1;//Global Scope
// function Sum(a){
//     return function(b){
//         return function(c){
//             // outerScope
//             return function (d){
//                 // local scope
//                 return a+b+c+d+e;

//             }
//         }

//     }

// }
// console.log(Sum(1)(2)(3)(4));

////////////////////////////////////

// what will be logged to console
// let count = 0; //     <= ''
// (function printCount() {
//   // ''
//   if (count === 0) {
//     // ''
//     let count = 1; //1  // here the shadowing is happening
//     // in  block scope its gonna effect the if w change count value
//     console.log(count);
//   }
// //   but outside scope the count value still equal to zero  since count has been initialised in global scope
//   console.log(count); //0
//   //
// });



// ///////////////////////////////////////////
// q2. 

// function createbase(num){
//     return function(innernum){
//         console.log(innernum+ num);
//     }
// }
// // var addSix=createbase(6);
// // addSix(10);
// createbase(6)(10);



// // createbase is a function that takes one parameter num.
// // Inside createbase, it defines and returns another function.
// // This returned function takes one parameter innernum.
// // When this returned function is called, it prints the sum of innernum and the num passed to the createbase function.
// // var addSix = createbase(6); - Here, createbase is called with the argument 6, so num inside createbase becomes 6. It returns the inner function (closure) which now has access to the num variable (which is 6 in this case).
// // addSix(10); - Now, addSix is a function that takes one argument (innernum). When you call addSix(10), it adds 10 (the argument passed to addSix) to num (which is 6), resulting in 16. So, 16 is printed to the console.
// // So, the output of this code will be 16.













//////////////////////////////////////////
// ques3 TimeOPtimization

// function find(index){
//     let a=[];
//     for(let i=0;i<100000;i++){
//         a[i]=i*i;
//     }
//     console.log(a[index]);
// }
// console.time("6");
// find(6);
// console.timeEnd('6');
//   console.time("12");
// find(12);
// console.timeEnd('12')

// time and time end are relatable (time jo hai start krra hai && then it will find it from array
// the timeend();
// using closure to OPtimse time

// function find(){
//     let a=[];
//     for(let i=0;i<100000;i++){
//         a[i]=i*i;
//     }

//     function closure(index){
//         console.log(a[index]);
//     }
   
// }
// console.time("6");
// closure(6);
// console.timeEnd('6');
// console.time("12");
// closure(12);
// console.timeEnd('12')
