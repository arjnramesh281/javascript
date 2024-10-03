fetch('https://dummyjson.com/products').then(response => response.json()).then(data=>{
    data.products.forEach(element => {
        // console.log(element.category);
        const row=document.querySelector(".row")
        const col=document.createElement("div")
        col.classList.add("col-lg-3")
        col.innerHTML=`
        <img src="${element.images}" width="100%">
        <h2 >${element.title}</h2>
        <h4 >${element.category}</h4>
        `
        row.appendChild(col)
    });
})