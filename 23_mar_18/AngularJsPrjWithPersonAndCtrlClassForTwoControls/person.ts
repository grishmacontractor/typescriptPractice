export default class Person {
        fullName: string;
        gender: string;

//------------------------------------------------------------------------------constructor
        constructor() {
            this.fullName = "";
            this.gender = "";
        }

//------------------------------------------------------------------------------constructor
//------------------------------------------------------------------------------addData
        // addData function
        add_data = (fname: string, gender: string): void => {
            this.fullName = fname;
            this.gender = gender;
        }//end of add_data function
//------------------------------------------------------------------------------end of addData
//------------------------------------------------------------------------------display
        displayPersonInfo = (): void => {
            console.log("fullName = " + this.fullName);
            console.log("gender = " + this.gender);
        }
//------------------------------------------------------------------------------end of display
}//end of class Person

