let data = [];
module MyController {
    class Person{
        fullName : string;
        obj:any;
        info:string;
//------------------------------------------------------------------------------constructor
        constructor()
        {
            this.fullName = "";

        }
//------------------------------------------------------------------------------constructor

//------------------------------------------------------------------------------addData
        // addData function
        add_data = (fname:string) : void =>
        {
            this.fullName=fname;
            this.obj = {fullName: this.fullName};
        }//end of add_data function
//------------------------------------------------------------------------------end of addData

//------------------------------------------------------------------------------display
        displayPersonInfo = () : void =>
        {
            console.log("fullName = "+this.fullName);
        }
//------------------------------------------------------------------------------end of display

};//end of class Person

export class FormCtrl{
        static $inject = ["$scope","$window"];
       constructor($scope,$window) {
           //$scope.form = {};
           $scope.info="";
           $scope.newobj = {};
           $scope.goEdit = false;
           $scope.status = true;
           $scope.editstatus = false;
           $scope.form = {};
//------------------------------------------------------------------------------add_data1
           $scope.add_data1 = () : void =>
           {
               let p1:Person = new Person();
               p1.add_data($scope.fullName);
               data.push(p1);
               p1.displayPersonInfo();
               $scope.info="Record Added.....";
               $scope.resetData();
           }
//------------------------------------------------------------------------------end of add_data1

//------------------------------------------------------------------------------resetData
           $scope.resetData = () : void => {
               $scope.fullName="";
           }
//------------------------------------------------------------------------------end of resetData
           $scope.data=data;
       }// end of constructor
    };// end of class FormCtrl
}//end of MyController Module

declare var angular: any;
angular.module('myapp', ['validation', 'validation.rule']).controller('FormCtrl', MyController.FormCtrl);
