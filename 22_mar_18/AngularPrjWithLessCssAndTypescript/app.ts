module MyController {
    export class FormCtrl{
        static $inject = ["$scope","$window"];
       constructor($scope,$window){
           $scope.form = {};
           $scope.data= [];
           $scope.fullName = "";
           $scope.info = "Input Person Details";
           $scope.gender = {
               name: 'Female'
           };
           $scope.newobj= {};
           $scope.goEdit = false;
           $scope.status = true;
           $scope.editstatus = false;
//-------------------------------------------------creating array to assign values to checkbox
           $scope.hobbies = [{
               hid: 1,
               name: 'Reading',
               selected: true
           }, {
               hid: 2,
               name: 'Travelling',
               selected: false
           }, {
               hid: 3,
               name: 'Photography',
               selected: false
           }]
//-------------------------------------------------------------------------------
           //defaultValues function
           $scope.defaultValues = () : void => {
               $scope.fullName = "";
               $scope.gender = {
                   name: 'Female'
               };
               $scope.hobbies = [{
                   hid: 1,
                   name: 'Reading',
                   selected: true
               }, {
                   hid: 2,
                   name: 'Travelling',
                   selected: false
               }, {
                   hid: 3,
                   name: 'Photography',
                   selected: false
               }];
               $scope.qualification = "";
               $scope.today= undefined;
           }// end of default values function
//-------------------------------------------------------------------------------
//add-data function
           $scope.add_data = () : void => {
               let hob_arr: any = angular.copy($scope.hobbies);
               $scope.newobj = { fullName: $scope.fullName, gender: $scope.gender.name, hobbies: hob_arr, qualification: $scope.qualification, today: $scope.today};
               $scope.data.push($scope.newobj);

               $scope.defaultValues();
               $scope.info = "Record Added.....";
               $scope.status = true;

               //let Form1: any = this.Form1;
               $scope.Form1.$setPristine();
              // Form1.$setPristine();
           }//end of add_data function
//-------------------------------------------------------------------------------
           //editRec function
           $scope.editRec = (index: number) : void =>
           {
               $scope.fullName = $scope.data[index].fullName;
               $scope.gender.name = $scope.data[index].gender;
               $scope.hobbies=angular.copy($scope.data[index].hobbies);
               $scope.qualification=$scope.data[index].qualification;
               $scope.today=$scope.data[index].today;
               $scope.goEdit = true;
               $scope.index=index;
               $scope.info = "Modify Person Details...";
               $scope.status = false;
           }//end of editRec function
//-------------------------------------------------------------------------------
           //updateData function
           $scope.updateData = () : void =>
           {
               console.log("in update data index = "+$scope.index);
               $scope.data[$scope.index].fullName = $scope.fullName;
               $scope.data[$scope.index].gender = $scope.gender.name;
               $scope.data[$scope.index].hobbies= angular.copy($scope.hobbies);
               $scope.data[$scope.index].qualification= $scope.qualification;
               $scope.data[$scope.index].today = $scope.today;
               $scope.goEdit = false;
               $scope.info = "Record Updated.....";
               $scope.defaultValues();
           }// end of updateData
//-------------------------------------------------------------------------------
           //remove function
           $scope.remove = (index: number) : void =>
           {
               if ($window.confirm("Please confirm?"))
               {
                   $scope.Message = "You clicked YES.";
                   $scope.data.splice(index, 1);
                   $scope.info = "Record Deleted.....";
                   $scope.defaultValues();
               } else
               {
                   $scope.Message = "You clicked NO.";
               }
           }// end of remove function
//-------------------------------------------------------------------------------
       }// end of constructor

    };// end of class FormCtrl

}//end of MyController Module
declare var angular: any;
angular.module('myapp', ['validation', 'validation.rule'])
    .controller('FormCtrl', MyController.FormCtrl);
