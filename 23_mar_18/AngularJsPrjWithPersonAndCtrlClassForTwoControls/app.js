var MyController;
(function (MyController) {
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
    }());
    ; //end of class Person
    /* ******************************************************************* */
    var FormCtrl = /** @class */ (function () {
        function FormCtrl($scope, $window) {
            $scope.info = "";
            $scope.newobj = {};
            $scope.goEdit = false;
            $scope.form = {};
            $scope.gender = 'Male';
            var data = [];
            //------------------------------------------------------------------------------add_data1
            $scope.add_data1 = function () {
                var p1 = new Person();
                p1.add_data($scope.fullName, $scope.gender);
                data.push(p1);
                p1.displayPersonInfo();
                $scope.info = "Record Added.....";
                $scope.resetData();
            };
            //------------------------------------------------------------------------------end of add_data1
            //------------------------------------------------------------------------------resetData
            $scope.resetData = function () {
                $scope.fullName = "";
                $scope.gender = "Male";
            };
            //------------------------------------------------------------------------------end of resetData
            //------------------------------------------------------------------------------remove
            $scope.remove = function (index) {
                if ($window.confirm("Please confirm?")) {
                    $scope.Message = "You clicked YES.";
                    $scope.data.splice(index, 1);
                    $scope.info = "Record Deleted.....";
                }
                else {
                    $scope.Message = "You clicked NO.";
                }
            }; // end of remove function
            //------------------------------------------------------------------------------end of remove
            //-------------------------------------------------------------------------------editRec function
            //editRec function
            $scope.editRec = function (index) {
                var p1 = $scope.data[index];
                $scope.fullName = p1.fullName;
                $scope.gender = p1.gender;
                $scope.goEdit = true;
                $scope.index = index;
                $scope.info = "Modify Person Details...";
            }; //end of editRec function
            //-------------------------------------------------------------------------------end of editRec function
            //-------------------------------------------------------------------------------
            //updateData function
            $scope.updateData = function () {
                var p1;
                p1 = new Person();
                p1.fullName = $scope.fullName;
                p1.gender = $scope.gender;
                $scope.data[$scope.index] = p1;
                $scope.info = "Record Updated.....";
                $scope.resetData();
            }; // end of updateData
            //-------------------------------------------------------------------------------
            $scope.data = data;
        } // end of constructor
        FormCtrl.$inject = ["$scope", "$window"];
        return FormCtrl;
    }());
    MyController.FormCtrl = FormCtrl;
    ; // end of class FormCtrl
})(MyController || (MyController = {})); //end of MyController Module
angular.module('myapp', ['validation', 'validation.rule'])
    .controller('FormCtrl', MyController.FormCtrl);
