function factorial(){
    i=parseInt(document.getElementById("num").value)
    a=1
    result=1
    do{
        result*=a
        a++
    }
    while(a<=i)
        console.log(result);
        
}