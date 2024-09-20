function demo(){
    a=parseInt(document.getElementById('p1').value)
    if(a>100000){
        document.getElementById('message').innerHTML='tax amount:'
        document.getElementById('result').innerHTML=a*0.15
    }
    else if(a>50000 && a<=100000){
        document.getElementById('message').innerHTML='tax amount:'
        document.getElementById('result').innerHTML=a*0.10
    }
    else if(a<=50000){
        document.getElementById('message').innerHTML='bill amount:'
        document.getElementById('result').innerHTML=a*0.05
    }
}