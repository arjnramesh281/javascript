function demo(){
    a=document.getElementById('c1').value
    if(a=='delhi'){
        document.getElementById('message').innerHTML='Monument of Delhi is Red Fort'
        
    }
    else if(a=='agra'){
        document.getElementById('message').innerHTML='Monument of Agra is Taj Mahal'
    }
    else if(a=='jaipur'){
        document.getElementById('message').innerHTML='Monument of Jaipur is Jal Mahal'
    }
 
    else {
        document.getElementById('message').innerHTML='invalid input:'
    }
}