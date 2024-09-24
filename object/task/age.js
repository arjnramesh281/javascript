d=[{name:"akhil",age:20,place:"ekm"},{name:"manu",age:23,place:"kllm"},{name:"vasu",age:32,place:"knnr"},{name:"amaan",age:33,place:"kzkode"},{name:"ram",age:26,place:"ekm"},{name:"sanu",age:34,place:"plkad"}]
greater=[]
lesser=[]

for ( let i of d){
    if(i.age>=30){
       greater.push(i)
    }
    else{
        lesser.push(i)
    }
}
console.log(greater); 
console.log(lesser); 