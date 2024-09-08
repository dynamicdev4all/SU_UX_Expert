class Animals{
    constructor(){
        console.log("Object Constructed of class Animals");
    }
}

class Herbivores extends Animals{
    constructor(){
        super();
        console.log("Onject created of class Herb")
    }
}
class Carnivores extends Animals{
    constructor(){
        super();
        console.log("Onject created of class Carnivores")
    }
}
class OmniVores extends Animals{
    constructor(){
        super();
        console.log("Onject created of class Omnivores")
    }
    // regular functions
    greet(){
        console.log("Hii Omni");
    }
    // arrow functions
    greet =()=>{console.log("Hii Omni");}

    add = ()=> return a+b
}
const dog = new Animals();
const cow = new Herbivores();
const lion = new OmniVores();