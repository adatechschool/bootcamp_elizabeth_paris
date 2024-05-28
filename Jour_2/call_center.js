const respondent = {
    name: "Marie",
    job: "respondent",
    isAvailable: true,

    getCall: function () {
        if (this.isAvailable == true ) {
            console.log(`The ${this.job} ${this.name} get the call.`)
        }
    },

};

const manager = {
    name: "Hortense",
    job: "manager",
    isAvailable: true,

    getCall: function () {
        if (this.isAvailable == true ) {
            console.log(`The ${this.job} ${this.name} get the call.`)
        }
    },

};

const director = {
    name: "Pauline",
    job: "director",
    isAvailable: true,

    getCall: function () {
        if (this.isAvailable == true ) {
            console.log(`The ${this.job} ${this.name} get the call.`)
        }
    },

};

const marie = Object.create(respondent);
//marie.isAvailable = false
const hortense = Object.create(manager);
const pauline = Object.create(director);

class callCenter () {
    worker(job, isAvailable) {
        this.job = job;
        this.isAvailable = isAvailable;
    }

    dispatchCall () {

    }
}