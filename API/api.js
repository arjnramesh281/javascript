fetch('https://dummyjson.com/products')
.then(response => response.json())
.then(data => {
  data.products.forEach(element => {
    const row = document.querySelector(".row");
    const col = document.createElement("div");
    col.classList.add("col-lg-2", "mb-4");
    col.innerHTML = `
      <div class="card h-100">
        <img src="${element.thumbnail}" class="card-img-top" alt="${element.title}">
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">${element.category}</p>
        </div>
        <div class="card-footer">
          <h6 class="text-muted">$${element.price}</h6>
        </div>
      </div>
    `;
    row.appendChild(col);
  });
});
