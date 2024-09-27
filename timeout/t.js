// console.log('start');
// function display (callback) {
//     console.log('welcome');
//     console.log('welcome1');
//     console.log('welcome2');
//     setTimeout(function(){
//         console.log('inside fun');
//         callback()
//     },3000)
//     }
// function display1(){
// console.log('dis1');
// console.log('dis2');
// console.log('dis3');
// }
// console.log('before');
// display (display1)
// console.log('end');




// function display() {
//     c=console.log("rum"); 
// }
// const a=setInterval(display,3000)


let count=10
let c=setInterval(function(){
    console.log(count);
    count--
    if (count==0){
        clearInterval(c)
    console.log("completed");
    }
    
},2000)