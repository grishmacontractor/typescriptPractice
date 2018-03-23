"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    //------------------------------------------------------------------------------constructor
    function Person() {
        var _this = this;
        //------------------------------------------------------------------------------constructor
        //------------------------------------------------------------------------------addData
        // addData function
        this.add_data = function (fname, gender) {
            _this.fullName = fname;
            _this.gender = gender;
        }; //end of add_data function
        //------------------------------------------------------------------------------end of addData
        //------------------------------------------------------------------------------display
        this.displayPersonInfo = function () {
            console.log("fullName = " + _this.fullName);
            console.log("gender = " + _this.gender);
        };
        this.fullName = "";
        this.gender = "";
    }
    return Person;
}()); //end of class Person
exports.default = Person;
