// Problem :
// Imagine you have a call center with three levels of employees: respondent, manager, and director.
// An incoming telephone call must be first allocated to a respondent who is free.
// If the respondent can't handle the call, he or she must escalate the call to a manager.
// If the manager is not free or not able to handle it, then the call should be escalated to a director.
// To do :
// Design the classes and data structures for this problem.
// Implement a method dispatchCall() which assigns a call to the first available employee.

//

class Employee {
  constructor(emplName, role, roleLevel, availability) {
    this.emplName = emplName;
    this.role = role;
    this.roleLevel = roleLevel;
    this.availability = availability;
  }

  listID() {
    console.log(
      "Nom : " +
        this.emplName +
        " - Rôle : " +
        this.role +
        " - Rôle level : " +
        this.roleLevel +
        " - Dispo : " +
        this.availability
    );
  }

  dispatchCall() {
    // employee available
    if (this.availability === true) {
      this.availability = false;
      callHandled = true;
    }
    // employee non available
    if (this.availability === false) {
      callHandled = false;
    }
  }
}

class Call {
    constructor (userID, clientID, timeStamp, callState) {
        this.userID = userID;
        this.clientID = clientID;
        this.timeStamp = timeStamp;
        this.callState = callState;
    }
}

let empl1 = new Employee("Julia", "manager", 2, true);
let empl2 = new Employee("Tom", "respondent", 1, true);
let empl3 = new Employee("Alex", "director", 3, false);
let empl4 = new Employee("Camille", "respondent", 1, true);

// test class
empl1.listID();

let callQueue = [];
let team = [empl1, empl2, empl3, empl4];
let callHandled = false;

// à l'arrivée d'un call, on itère dispatchCall() sur le tableau de la team
let procedeCall = (team) => {
  for (let employee of team) {
    if (callHandled === false) {
      if (employee.roleLevel === 1) {
        employee.dispatchCall();
      }
      // si pas de respondant niveau 1, passez au level suivant 
      // "???"

    } else if (callHandled === true) {
      console.log("Appel pris");
      break;
    }
  }
};
