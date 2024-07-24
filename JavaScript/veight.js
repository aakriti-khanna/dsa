document.querySelector("#myproducts").addEventListener('click', (event)=>{
    console.log(event);
    if(event.target.tagname ==="li"){
        window.location.href += "#" + event.target.id;
    }
})


// let arr=[[1,2],[3,4],[5,6,[7,8],9],
// [10,11]];

// let flattened=[].concat(...arr);
// console.log(flattened);

// function customFlat(arr ,depth=1){
//     let result=[];
//     arr.forEach((ar) => {
//         if(Array.isArray(ar) && depth>0){
//             result.push(...customFlat(ar,depth-1));
//         }
//         else result.push(ar);
//     });
//     return result;
// }
// console.log(customFlat(arr));

let arr=[[1,2],[3,4],[5,6,[7,8],9],
[10,11]];



function customFlat(arr ,depth=1){
    let result=[];
    arr.forEach((ar) => {
        if(Array.isArray(ar) && depth>0){
         result.push(...customFlat(ar ,depth-1));

        }
        else result.push(ar);

    });
   
    return result;
}
console.log(customFlat(arr));



function a(){
    for(var i=0 ;i<4 ;i++){
    setTimeout(function log(){
        console.log(i);
    },i* 1000)
}
}
a();