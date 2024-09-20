function sample(){
    a=parseInt(document.getElementById("fno").value)
    b=parseInt(document.getElementById("sno").value)
    c=parseInt(document.getElementById("tno").value)
    d=parseInt(document.getElementById("fono").value)
    if(a>b && a>c && a>d){
    document.getElementById("h1").innerHTML=a
}
else if(b>c && b>a && b>d){
    document.getElementById("h1").innerHTML=b
}
else if(c>a && c>b && c>d ){
    document.getElementById("h1").innerHTML=c
}
else{
    document.getElementById("h1").innerHTML=d
}
}