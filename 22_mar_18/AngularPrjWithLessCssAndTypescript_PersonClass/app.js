var data = [];
var MyController;
(function (MyController) {
    var Person = /** @class */ (function () {
        //------------------------------------------------------------------------------constructor
        function Person() {
            var _this = this;
            //------------------------------------------------------------------------------constructor
            //------------------------------------------------------------------------------addData
            // addData function
            this.add_data = function (fname) {
                _this.fullName = fname;
                _this.obj = { fullName: _this.fullName };
            }; //end of add_data function
            //------------------------------------------------------------------------------end of addData
            //------------------------------------------------------------------------------display
            this.displayPersonInfo = function () {
                console.log("fullName = " + _this.fullName);
            };
            this.fullName = "";
        }
        return Person;
    }());
    ; //end of class Person
    var FormCtrl = /** @class */ (function () {
        function FormCtrl($scope, $window) {
            //$scope.form = {};
            $scope.info = "";
            $scope.newobj = {};
            $scope.goEdit = false;
            $scope.status = true;
            $scope.editstatus = false;
            $scope.form = {};
            //------------------------------------------------------------------------------add_data1
            $scope.add_data1 = function () {
                var p1 = new Person();
                p1.add_data($scope.fullName);
                data.push(p1);
                p1.displayPersonInfo();
                $scope.info = "Record Added.....";
                $scope.resetData();
            };
            //------------------------------------------------------------------------------end of add_data1
            //------------------------------------------------------------------------------resetData
            $scope.resetData = function () {
                $scope.fullName = "";
            };
            //------------------------------------------------------------------------------end of resetData
            $scope.data = data;
        } // end of constructor
        FormCtrl.$inject = ["$scope", "$window"];
        return FormCtrl;
    }());
    MyController.FormCtrl = FormCtrl;
    ; // end of class FormCtrl
})(MyController || (MyController = {})); //end of MyController Module
angular.module('myapp', ['validation', 'validation.rule']).controller('FormCtrl', MyController.FormCtrl);
