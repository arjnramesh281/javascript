fetch('https://dummyjson.com/products')
.then(response => response.json())
.then(data => {
  data.products.forEach(element => {
    const row = document.querySelector(".row");
    const col = document.createElement("div");
    col.classList.add("col-lg-3", "mb-4");
    col.innerHTML = `
      <div class="card h-100">
        <img src="${element.thumbnail}" class="card-img-top" alt="${element.title}">
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">${element.category}</p>
        </div>
        <div class="card-footer">
            <h6 class="text-muted">$${element.price}</h6>
            <a href="#" type="button" class="btn btn-success see-more-btn" data-id="${element.id}" data-bs-toggle="modal" data-bs-target="#myModal">
            see more
    </a>
        </div>
      </div>
    `;
    row.appendChild(col);
  });
  document.querySelectorAll(".see-more-btn").forEach(btn => {
    btn.addEventListener("click",(e)=>{
        const productid=e.target.getAttribute("data-id");
        const  product=data.products.find(p=>p.id==productid)

        if (product) {
            console.log("product");
            
            document.getElementById("modaltitle").textContent=product.title;
            document.getElementById("modalimage").src=product.thumbnail;
            document.getElementById("modalcategory").textContent=product.category;
            document.getElementById("modaldescription").textContent=product.description;
            document.getElementById("modaldescription").textContent=`price: ${product.price}`;
        }
    });
    
  });
}).catch(error =>{
    console.log("error fetching the data:",error);
    
});