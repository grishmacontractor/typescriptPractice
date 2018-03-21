let angular : any;
angular.module("myapp", []).controller("GreetingController", ["$scope", ($scope) =>
    new MyController.GreetingController($scope)]);

module MyController {
    export class GreetingController {
        constructor($scope){
            $scope.greetMe = () => {
                $scope.fullName = $scope.firstName + " "+ $scope.lastName;
            };
        }
    }
}
