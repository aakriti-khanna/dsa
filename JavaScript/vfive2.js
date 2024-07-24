// the variable i is hoisted to the top of the function a() and is shared across all iterations of the loop.



// function a() {
//   for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i);
//     }, i * 1000);
//   }
// }

// a();

// Js enging last time encounter krta hai 
// value three isliye 3 baar three print
// kregaa

// 0,1,2 /'not print
// will print  3 only
// since var has a function scope it has 
// no block scope
// set timeout only runs after
// the complete con run succesfully



// When the loop runs, it schedules three log() functions to run after 0, 1, and 2 seconds respectively. But by the time these functions execute, the loop has already completed, and the value of i is 3.
// function a() {
//     for (let i = 0; i < 3; i++) {
//       setTimeout(function log() {
//         console.log(i);
//       }, i * 1000);
//     }
//   }
  
//   a();

//   0,1,2
// {
//     i=0;
// }

// {
//     i=1;
// }
// it has its own block scope
// it will see the code has run successfully
// atthe same time as iteration



// //////////////////////////////////////// how would u use closure  to create
// a private counter


// function counter(){
//     var _counter=0;
//     function add(increment){
//         _counter+=increment;
//     }

//     function retrieve(){
//         return "Add ValofCounter ="+_counter;
//     }
//     return{
//         add,
//         retrieve,
//     };

// }

// const c=counter()
// c.add(5);
// c.add(10)

// console.log(c.retrieve());

/////////////////////////////////////////////////ModulePattern


  
// var Module= (function(){
//     function privateMethod(){
//         // do something
//         // not returning these func make them inaccessible o/s the modul space
//         // but a  public method can accss the private function used to manipulate the data inside that
//         // to prevent the direct access of user 

//         console.log("privat");
//     }
//     return{
//         publicMethod: function(){
// console.log("public");
//         }
//     }
// })

// Module.publicMethod();
// Module.privateMethod();



// /////////////////
//  Make this run only once
function liketheVideo(){
    let called=0;
    return function(){
        if (called>0){
            console.log("Already Subscribed");
        }

        else{
            view="Aaks"
            console.log("subscribe to",view);
            called++;
        }
    };
}
let isSubscribed= liketheVideo();
isSubscribed();
isSubscribed();
isSubscribed();
isSubscribed();