//import a = Drawing.Person from './Person';
import Person from "./Person"; 
class Employee {
    private department: string;
    p1: Person;
    constructor(name: string, department: string) {
        //this.p1 = new Person(name);
        this.p1.setName('aaaa') ;
       
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.p1.getName} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
//console.log(howard.name); // error