class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.absence = 0;
    }

    fullName(){
        return `My name is ${this.firstName} ${this.lastName}.`;
    }

    getAbsence(){
        this.absence += 1;
        return `${this.firstName} ${this.lastName} has been absence for ${this.absence} time(s).`
    }
}

let firstStudent = new Student("Tom", "Holland", 1);
let secondStudent = new Student("Jam", "Tim", 5);