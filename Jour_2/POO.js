class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Employee extends Person {
    constructor(name, age, position, availability) {
        super (name, age)
        this.position = position;
        this.availability = availability;
    }

    available() {
        console.log(`Hi I'm ${this.name}, the ${this.position}. ${this.availability === false ? "I'm not available for now": "How can I help you ?"}`)
    }
}

const employee1 = new Employee('Bob', 34, 'respondent', false)
const employee2 = new Employee('Carla', 27, 'manager', true)
const employee3 = new Employee('Elisa', 31, 'director', true)

const employeeArray = [employee1, employee2, employee3]

    // employee1.available()
    // employee2.available()
    // employee3.available()

employee1.available()  === true ? employee1.available() : employee2.available()
