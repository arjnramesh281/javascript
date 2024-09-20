function demo(){
    a=parseInt(document.getElementById('s1').value)
    b=parseInt(document.getElementById('y1').value)
    if(b>=5){
        document.getElementById('message').innerHTML='you are eligible for salary increment,your salary is:'
        document.getElementById('result').innerHTML=a+=a*0.05   
    }
    else{
        document.getElementById('message').innerHTML='you are not eligible for salary increment'
    }
}