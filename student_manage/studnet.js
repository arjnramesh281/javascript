data=[{id:"21",name:"abc",age:21,email:"a@gmail.com",course:"python",date:"10/11/2024"},{id:"451",name:"aswin",age:21,email:"aswin@gmail.com",course:"flutter",date:"10/11/2024"},{id:"81",name:"sugu",age:51,email:"sugu@gmail.com",course:"none",date:"10/11/2024"},{id:"31",name:"manu",age:21,email:"manu@gmail.com",course:"c++",date:"10/11/2024"}]

function display() {
    const t_var=document.querySelector("#tab tbody")
    t_var.innerHTML=""
    data.forEach(element => {
        const t_row=document.createElement("tr")

        const t_id=document.createElement("td")
        t_id.textContent=element.id
        t_row.appendChild(t_id)

        
        const t_name=document.createElement("td")
        t_name.textContent=element.name
        t_row.appendChild(t_name)

        
        const t_age=document.createElement("td")
        t_age.textContent=element.age
        t_row.appendChild(t_age)

        
        const t_email=document.createElement("td")
        t_email.textContent=element.email
        t_row.appendChild(t_email)

        
        const t_course=document.createElement("td")
        t_course.textContent=element.course
        t_row.appendChild(t_course)

        
        const t_date=document.createElement("td")
        t_date.textContent=element.date
        t_row.appendChild(t_date)

        // edit td

        const edit_td=document.createElement("td")
        const edit_btn=document.createElement("button")
        edit_btn.textContent="Edit"
        edit_btn.onclick=function(){
            edit_form(element.id)
        }
        edit_td.appendChild(edit_btn)
        t_row.appendChild(edit_td)

        
        // delete
        const  del_td=document.createElement("td")
        const  del_btn=document.createElement("button")
        del_btn.textContent="delete"
        del_btn.onclick=function() {
            delete_data(element.id)
            
        }

        del_td.appendChild(del_btn)
        t_row.appendChild(del_td)

        
        t_var.appendChild(t_row)
        
    });
    
}


document.getElementById("norm_form").addEventListener("submit",function(event){
    event.preventDefault() // to remove refresh
    const id=document.getElementById("id").value
    const name=document.getElementById("name").value
    const age=parseInt(document.getElementById("age").value)
    const email=document.getElementById("email").value
    const course=document.getElementById("course").value
    const date=document.getElementById("date").value
    data.push({id:id,name:name,age:age,email:email,course:course,date:date})
    document.getElementById("id").value=""
    document.getElementById("name").value=""
    document.getElementById("age").value=""
    document.getElementById("email").value=""
    document.getElementById("course").value=""
    document.getElementById("date").value=""

    display()
})


let edit_id=""
function edit_form(id) {
    console.log("editing",id);
    document.getElementById("edit_form").style.display="grid"
    document.getElementById("norm_form").style.display="none"
    const edit_details=data.find(user=>user.id==id)
    document.getElementById("e_id").value=edit_details.id
    document.getElementById("e_name").value=edit_details.name
    document.getElementById("e_age").value=edit_details.age
    document.getElementById("e_email").value=edit_details.email
    document.getElementById("e_course").value=edit_details.course
    document.getElementById("e_date").value=edit_details.date
    edit_id=id
    
    
}


document.getElementById("edit_form").addEventListener("submit",function (event) {
    event.preventDefault()
    const e_id=document.getElementById("e_id").value
    const e_name=document.getElementById("e_name").value
    const e_age=document.getElementById("e_age").value
    const e_email=document.getElementById("e_email").value
    const e_course=document.getElementById("e_course").value
    const e_date=document.getElementById("e_date").value
    // console.log(e_name,e_age,e_place);
    data=data.map(user=>{
        if(user.id==edit_id){
            return {...user,id:e_id,name:e_name,age:e_age,email:e_email,course:e_course,date:e_date}
        }
        return user
    })

    document.getElementById("edit_form").style.display="none"
    document.getElementById("norm_form").style.display="grid"
    display()

})

function delete_data(id) {
    data=data.filter(user=>{
        if(user.id!=id){
            return user
        }
    })

    display()

}  
display()