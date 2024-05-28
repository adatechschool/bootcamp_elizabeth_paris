// Imagine you have a call center with three levels of employees: respondent, manager, and director. An incoming telephone call must be first allocated to a respondent who is free. If the respondent can't handle the call, he or she must escalate the call to a manager. If the manager is not free or not able to handle it, then the call should be escalated to a director. Design the classes and data structures for this problem. Implement a method dispatchCall() which assigns a call to the first available employee.


//Classe parent :
class Employee {
    constructor(name, free){
        this.name = name;
        this.free = free;
    }
}

// Héritage : classes filles pour chaque status :
class Respondent extends Employee {
    constructor(name, free) {
        super(name, free)
        this.status = 2;
    }
}
class Manager extends Employee {
    constructor(name, free) {
        super(name, free)
        this.status = 1;
    }
}
class Director extends Employee {
    constructor(name, free) {
        super(name, free)
        this.status = 0;
    }
}

//Créer différents objets en intanciant la classe Employee pour les différents status :
const director = new Director("Jacotte", true);
const manager1 = new Manager("Romane", true);
const manager2 = new Manager("Océane", true);
const respondent1 = new Respondent("Jean-Claude", true);
const respondent2 = new Respondent("Jean-Jacques", false);
const respondent3 = new Respondent("Jean-Michel", false);
const respondent4 = new Respondent("Jean-Paul", false);

//Créer un tableau d'objets :
const arrayOfObjects = [director, manager1, manager2, respondent1, respondent2, respondent3, respondent4]

//créer une liste d'appels :
const calls = ["call1", "call2", "call3", "call4", "call5"]


//Fonction pour dispatcher les appels :
function dispatchCall(){
    let arraySorted = arrayOfObjects.sort((a,b) => b.status - a.status)
    
    for(let i = 0; i < arraySorted.length; i++){
     
        if(arrayOfObjects[i].free === true){
            console.log(arraySorted[i], "a pris", calls[0]);
            calls.shift();
            arraySorted[i] = false;
        } 
    }
    return ["Il reste", calls, "à prendre"];
}

console.log(dispatchCall()); 




//Ou une méthode à appeler avec la classe ? :
//La méthode ".prototype" sert à rajouter une fonction au constructeur d'objet, lorsqu'on est en dehors de lui :
// Employee.prototype.dispatchCall = function () {
//     console.log("Am I free ? " + this.free);
//     
//  }