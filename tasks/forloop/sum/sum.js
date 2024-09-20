function sum(){
    a=parseInt(document.getElementById("sno").value)
    b=parseInt(document.getElementById("eno").value)
    sum=0
    for(i=a;i<=b;i++){
       sum+=i
    }
    // console.log(sum);
    document.getElementById("h1").innerHTML=sum
}