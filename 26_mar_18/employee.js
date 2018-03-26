"use strict";
exports.__esModule = true;
var Employee = /** @class */ (function () {
    function Employee(name, department) {
        //this.p1 = new Person(name);
        this.p1.setName('aaaa');
        this.department = department;
    }
    Employee.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.p1.getName + " and I work in " + this.department + ".";
    };
    return Employee;
}());
var howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
//console.log(howard.name); // error
