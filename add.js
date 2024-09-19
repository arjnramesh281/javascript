function sample(){
    a=parseInt(document.getElementById("fno").value)
    b=parseInt(document.getElementById("sno").value)
    document.getElementById("h1").innerHTML=a+b
}
function sample1(){
    a=parseInt(document.getElementById("fno").value)
    b=parseInt(document.getElementById("sno").value)
    document.getElementById("h1").innerHTML=a-b
}
function sample2(){
    a=parseInt(document.getElementById("fno").value)
    b=parseInt(document.getElementById("sno").value)
    document.getElementById("h1").innerHTML=a*b
}
function sample3(){
    a=parseInt(document.getElementById("fno").value)
    b=parseInt(document.getElementById("sno").value)
    document.getElementById("h1").innerHTML=a/b  
}
function sample4(){
    a=parseInt(document.getElementById("fno").value)
    b=parseInt(document.getElementById("sno").value)
    document.getElementById("h1").innerHTML=a%b
}

function sample5(){
    a=parseInt(document.getElementById("fno").value)
    b=parseInt(document.getElementById("sno").value)
    c=parseInt(document.getElementById("tno").value)
    if(a>b && a>c){
    document.getElementById("h1").innerHTML=a
}
else if(b>c && b>a){
    document.getElementById("h1").innerHTML=b
}
else{
    document.getElementById("h1").innerHTML=c
}
}