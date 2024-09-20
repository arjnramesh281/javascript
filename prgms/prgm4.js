function demo(){
    a=parseInt(document.getElementById('u1').value)
    if(a<=100){
        document.getElementById('message').innerHTML='no charge'
        
    }
    else if(a<=200){
        document.getElementById('message').innerHTML='bill amount:'
        document.getElementById('result').innerHTML=(a-100)*5
    }
    else{
        document.getElementById('message').innerHTML='bill amount:'
        document.getElementById('result').innerHTML=(a-200)*10+500
    }
}