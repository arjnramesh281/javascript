function demo(){
    a=parseInt(document.getElementById('n1').value)
    d=a%10
    if(d%3==0){
        document.getElementById('message').innerHTML='Divisible'
    }
    else{
        document.getElementById('message').innerHTML='not divisible'
    }
}