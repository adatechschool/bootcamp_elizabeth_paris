class worker {
    constructor(job, isAvailable) {
        this.job = job;
        this.isAvailable = isAvailable;
    }
}

class callCenter {

    dispatchCall (respondent, manager, director) {
        if (respondent.job == "respondent" && respondent.isAvailable == true) {
            console.log(`The ${respondent.job} get the call.`)
        }
        else if (manager.job == "manager" && manager.isAvailable == true) {
            console.log(`The ${manager.job} get the call.`)
        }
        else if (director.job == "director" && director.isAvailable == true) {
            console.log(`The ${director.job} get the call.`)
        }
        else {
            console.log("No one is available.")
        }
    }
};

const Marie = new worker("respondent", true);
const Hortense = new worker("manager", true);
const Pauline = new worker("director", true)
const call = new callCenter()

call.dispatchCall(Marie, Hortense, Pauline)