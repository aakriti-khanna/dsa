// currying

// function(a,b)=> func(a)(b);

// function f(b) {
//   return function f(a) {
//     // console.log(a,b);
//     return `${a} ${b}`;
//   };
//}

// console.log(f(5)(6));
// console.log(f(5));
// ƒ f(a){
// console.log(a,b);
//     return `${a} ${b}`;
//  }
// Why should we use currying
// Sum(2)(6)(1)
// function sum(a,b,c){
//     return a+b+c;
// }
// console.log(sum(2,6,1));

// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }
// console.log(sum(1)(2)(3));
/////////////////////////////////////////////////////////////////////////////////////
// Ques:==>3      currying big query
// evaluate("sum")(4)(2)=>6
// evaluate("multi")(4)(2)=>8
// evaluate("Divi")(4)(2)=>2
// evaluate("diff")(4)(2)=>2

// function evaluate(operation){
//     return function (a){
//         return function(b){
//             if(operation=="sum")return a+b;
//             else if(operation=="multiply")return a*b;
//             else if(operation=="divide")return a/b;
//             else if(operation=="diff")return a-b;
//             else return " Invalid Operation ";
            
//         };
//     };

// }
// console.log(evaluate("sum")(4)(3));



// Ques in Currying For infinite number
// 2,3,4,6
// function sum(a){
//     return function (b) {
//         if (b) return sum(a+b);
//         return a;
//     };
// }
// console.log(sum(5)(2)(4)(8)());


// function add(a){
//   return function (b) {
//     return function (){
//       return a+b;
//     };
//   };
// }

// console.log(add(5)(5)());


// Partial Application
// function sum(a){
//   return function(b,c){
//     return a+b+c;
//   };
// }
// const x= sum(10);
// console.log(x(5,6));

// OR
// console.log(sum(20)(5,4));
//////////////////////////////////////////////////////////
// For  Text Updation
// function updateElementText(id){
//   return function (content){
//     document.querySelector("#" + id).textContent=content;
//   };
// }
// const updateHeader= updateElementText("heading");
// updateHeader("Subscribe to Mee");

////////////////////////////////////////////////////
// For 
function curry(func){
  
  return function curriedFunc(...args){
    // console.log(args.length,func.length);
    if(args.length >= func.length ){
      return func(...args);

    }
    else{
      return function(...next) {
        return curriedFunc(...args ,...next);
      };
    }
  };
}

const sum= (a,b,c)=>a+b+c; 
const  totalSum= curry(sum);
console.log(totalSum(1)(2)(3));

