// ______________class_______________


class car {
    constructor(name,year) {
        this.name=name
        this.year=year
    }
    display(){
        console.log(this.name,this.year);
        
    }
}

audi= new car("audi",2024)
audi.display()


// _______________in object__________________

d={
    f_name:"rajan",
    l_name:" kartha",
    age:34,
    full_name:function() {
        return this.f_name+this.l_name
    }

}
console.log(d.full_name());
