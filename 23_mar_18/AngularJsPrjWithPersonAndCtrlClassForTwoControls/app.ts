module MyController
{
    class Person {
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
    };//end of class Person

    /* ******************************************************************* */
export class FormCtrl{
        static $inject = ["$scope","$window"];
        constructor($scope,$window) {
           $scope.info="";
           $scope.newobj = {};
           $scope.goEdit = false;
           $scope.form = {};
           $scope.gender='Male'
            let data = [];
//------------------------------------------------------------------------------add_data1
           $scope.add_data1 = () : void =>
           {
                let p1:Person = new Person();
               p1.add_data($scope.fullName,$scope.gender);
               data.push(p1);
               p1.displayPersonInfo();
                $scope.info="Record Added.....";
               $scope.resetData();
           }
//------------------------------------------------------------------------------end of add_data1
//------------------------------------------------------------------------------resetData
           $scope.resetData = () : void => {
               $scope.fullName="";
               $scope.gender="Male";
           }
//------------------------------------------------------------------------------end of resetData
//------------------------------------------------------------------------------remove
           $scope.remove = (index: number) : void =>
           {
               if ($window.confirm("Please confirm?"))
               {
                   $scope.Message = "You clicked YES.";
                   $scope.data.splice(index, 1);
                   $scope.info = "Record Deleted.....";
               } else
               {
                   $scope.Message = "You clicked NO.";
               }
           }// end of remove function
//------------------------------------------------------------------------------end of remove
//-------------------------------------------------------------------------------editRec function
           //editRec function
           $scope.editRec = (index: number) : void =>
           {
                let p1:Person=$scope.data[index];
                $scope.fullName = p1.fullName;
                $scope.gender=p1.gender;

                $scope.goEdit = true;
                $scope.index=index;
                $scope.info = "Modify Person Details...";
           }//end of editRec function
//-------------------------------------------------------------------------------end of editRec function
//-------------------------------------------------------------------------------
           //updateData function
           $scope.updateData = () : void =>
           {
               let p1:Person;
               p1 = new Person();
               p1.fullName = $scope.fullName;
               p1.gender = $scope.gender;
               $scope.data[$scope.index]=p1;
               $scope.info = "Record Updated.....";
               $scope.resetData();
           }// end of updateData
//-------------------------------------------------------------------------------
           $scope.data=data;
       }// end of constructor
    };// end of class FormCtrl
}//end of MyController Module
declare var angular: any;
angular.module('myapp', ['validation', 'validation.rule'])
    .controller('FormCtrl', MyController.FormCtrl);
