function sample(){
        let a="welcome to all"
        console.log(a);
        const main=document.querySelector(".main")
        const div=document.createElement("div")
        const h2=document.createElement("h2")
        div.innerHTML=`<h2 style="text-align:center;">${a}</h2>`
        main.appendChild(div)
           
}

sample()



// function demo(){
//     const main2=document.querySelector(".main2")
//     const div=document.createElement("div")
//     const h2=document.createElement("h2")
//     let time=60
//     let c=setInterval(function(){
//         div.innerHTML=`<h2 style="text-align:center">00:${time}<h2/>`
//         time--
//         if(time==0){
//             clearInterval(c)
//         div.innerHTML=`<h2 style="text-align:center">completed<h2/>`
//         }
//     },1000)

//     main2.appendChild(div)
// }


// demo()



function sumo(){
    const main3=document.querySelector(".main3")
    const div=document.createElement("div")
    const h2=document.createElement("h2")
    let minute=3
    let second=59
    let c=setInterval(function(){
        div.innerHTML=`<h2 style="text-align:center">${minute}:${second}<h2/>`
        second--
        
        if(second==0){
            minute--
            second=59
        }
        if (minute==0){
            clearInterval(c)
            div.innerHTML=`<h2 style="text-align:center">completed<h2/>`
        }
    },1000)

    main3.appendChild(div)
}


sumo()