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

        const edit_td=document.createElement("td")
        const edit_btn=document.createElement("button")
        edit_btn.textContent="Edit"
        edit_btn.onclick=function() {
            edit_frm(element.name)
        }
        edit_td.appendChild(edit_btn)
        t_row.appendChild(edit_td)


        // delete
        const  del_td=document.createElement("td")
        const  del_btn=document.createElement("button")
        del_btn.textContent="delete"
        del_btn.onclick=function() {
            delete_data(element.name)
            
        }

        del_td.appendChild(del_btn)
        t_row.appendChild(del_td)


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

let edit_name=""
function edit_frm(name) {
    console.log("editing",name);
    document.getElementById("edit_form").style.display="grid"
    document.getElementById("submit_form").style.display="none"
    const edit_details=d.find(user=>user.name==name)
    document.getElementById("e_name").value=edit_details.name
    document.getElementById("e_age").value=edit_details.age
    document.getElementById("e_place").value=edit_details.place
    edit_name=name
    
    
}

document.getElementById("edit_form").addEventListener("submit",function (event) {
    event.preventDefault()
    const e_name=document.getElementById("e_name").value
    const e_age=document.getElementById("e_age").value
    const e_place=document.getElementById("e_place").value
    // console.log(e_name,e_age,e_place);
    d=d.map(user=>{
        if(user.name==edit_name){
            return {...user,name:e_name,age:e_age,place:e_place}
        }
        return user
    })

    document.getElementById("edit_form").style.display="none"
    document.getElementById("submit_form").style.display="grid"
    display()

})

function delete_data(name) {
    d=d.filter(user=>{
        if(user.name!=name){
            return user
        }
    })

    display()
}
display()
