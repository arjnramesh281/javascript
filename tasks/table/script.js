d=[{name:"akhil",age:20,place:"ekm"},{name:"manu",age:23,place:"kllm"},{name:"vasu",age:32,place:"knnr"},{name:"amaan",age:33,place:"kzkode"},{name:"ram",age:26,place:"ekm"},{name:"sanu",age:34,place:"plkad"}]

function display(){
    const t_var=document.querySelector(".tab tbody") 
    t_var.innerHTML=""
    d.forEach(element => {
        const t_row=document.createElement("tr")

        const t_name=document.createElement("td")
        t_name.textContent=element.name
        t_row.appendChild(t_name)

        const t_age=document.createElement("td")
        t_age.textContent=element.age
        t_row.appendChild(t_age)
        
        const t_place=document.createElement("td")
        t_place.textContent=element.place
        t_row.appendChild(t_place)

        t_var.appendChild(t_row)

    });
}

document.getElementById("submit_form").addEventListener("submit",function(event){
    event.preventDefault() // to remove refresh
    const name=document.getElementById("name").value
    const age=parseInt(document.getElementById("age").value)
    const place=document.getElementById("place").value
    d.push({name:name,age:age,place:place})
    document.getElementById("name").value=""
    document.getElementById("age").value=""
    document.getElementById("place").value=""

    display()
})

display()
