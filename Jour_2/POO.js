// Imagine you have a call center with three levels of employees: respondent, manager, and director. An incoming telephone call must be first allocated to a respondent who is free. If the respondent can't handle the call, he or she must escalate the call to a manager. If the manager is not free or not able to handle it, then the call should be escalated to a director. Design the classes and data structures for this problem. Implement a method dispatchCall() which assigns a call to the first available employee.


//Une seule classe pour tout le monde ? :
class Employee {
    constructor(name, status, free){
        this.name = name;
        this.status = status;
        this.free = free;
    }
}

//Ou différentes classes ? :
// class Respondent {
//     constructor(name, free) {
//         this.name = name;
//         this.free = free;
//     }
// }
// class Manager {
//     constructor(name, free) {
//         this.name = name;
//         this.free = free;
//     }
// }
// class Director {
//     constructor(name, free) {
//         this.name = name;
//         this.free = free;
//     }
// }

//Créer différents objets en intanciant la classe Employee pour les différents status :
const director = new Employee("Jacotte", 0, true);
const manager1 = new Employee("Romane", 1, true);
const manager2 = new Employee("Océane", 1, true);
const respondent1 = new Employee("Jean-Claude", 2, true);
const respondent2 = new Employee("Jean-Jacques", 2, false);
const respondent3 = new Employee("Jean-Michel", 2, false);
const respondent4 = new Employee("Jean-Paul", 2, false);

//Créer un tableau d'objets :
const arrayOfObjects = [director, manager1, manager2, respondent1, respondent2, respondent3, respondent4]

//créer une liste d'appels :
const calls = ["call1", "call2", "call3", "call4", "call5"]


//Méthode (fonction ?) pour dispatcher les appels ? :
function dispatchCall(){
    let arraySorted = arrayOfObjects.sort((a,b) => b.status - a.status)
    console.log(arraySorted);
    for(let i = 0; i < arrayOfObjects.length; i++){
        console.log("coucou");
        if(arrayOfObjects[i].free === true){
            console.log(arrayOfObjects[i], "a pris", calls[0]);
            calls.shift();
        } 
    }
    return ["Il reste", calls, "à prendre"];
}

console.log(dispatchCall()); 

//Ou une méthode à appeler avec la classe ? :
//La méthode ".prototype" sert à rajouter une fonction au constructeur d'objet, lorsqu'on est en dehors de lui :
// Employee.prototype.dispatchCall = function () {
//     console.log("Am I free ? " + this.free);
//     if (Employee.free === false){

//     }
//  }