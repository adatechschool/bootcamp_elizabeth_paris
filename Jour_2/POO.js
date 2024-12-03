// Imagine you have a call center with three levels of employees: 
// respondent, manager, and director.
// An incoming telephone call must be first allocated to a respondent who is free.
// If the respondent can't handle the call, he or she must escalate the call to a manager.
// If the manager is not free or not able to handle it, then the call should be escalated to a director.
// Design the classes and data structures for this problem.
// Implement a method dispatchCall() which assigns a call to the first available employee.



class Respondent {
    job;
    occupy;

    constructor(job) {
        this.job = job;
        this.occupy = occupy;
    }

    dispatchCall(task) {
        if (!this.occupy) {
            console.log(`${this.job} est maintenant occupé.`);
            this.occupy = true;
            task.status = 'en cours';
            return task;
        } else {
            console.log(`${this.job} est déjà occupé. La tâche passe au manager...`);
            return new Manager(this.job).assignTask(task);
        }
    }
}

class Manager extends Respondent {

    constructor(job) {
        super(job)
    }

    dispatchCall() {
        if (!this.occupy) {
            console.log(`${this.job} est maintenant occupé.`);
            this.occupy = true;
            task.status = 'en cours';
            return task;
        } else {
            console.log(`${this.job} est déjà occupé. La tâche passe au directeur...`);
            return new Director(this.job).assignTask(task);
        }
    }
}

class Director extends Respondent {
  
    constructor(job) {
        super(job)
    }

    dispatchCall() {
        if (!this.occupy) {
            console.log(`${this.job} est maintenant occupé.`);
            this.occupy = true;
            task.status = 'en cours';
            return task;
        } else {
            console.log(`Tout le monde est déjà occupé. La tâche reste sans réponse`);
            return null;
        }
    }
}
