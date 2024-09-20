function demo(){
    a=parseInt(document.getElementById('d1').value)
    if(a==1){
        document.getElementById('message').innerHTML='monday'
        
    }
    else if(a==2){
        document.getElementById('message').innerHTML='tuesday'
    }
    else if(a==3){
        document.getElementById('message').innerHTML='wednesday'
    }
    else if(a==4){
        document.getElementById('message').innerHTML='thursday'
    }
    else if(a==5){
        document.getElementById('message').innerHTML='friday'
    }
    else if(a==6){
        document.getElementById('message').innerHTML='saturday'
    }
    else if(a==7){
        document.getElementById('message').innerHTML='sunday'
    }
    else{
        document.getElementById('message').innerHTML='invalid no:'
    }
}