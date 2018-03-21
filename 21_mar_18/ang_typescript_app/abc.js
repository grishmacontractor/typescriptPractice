var angular;
angular.module("myapp", []).controller("GreetingController", ["$scope", function ($scope) {
        return new MyController.GreetingController($scope);
    }]);
var MyController;
(function (MyController) {
    var GreetingController = /** @class */ (function () {
        function GreetingController($scope) {
            $scope.greetMe = function () {
                $scope.fullName = $scope.firstName + " " + $scope.lastName;
            };
        }
        return GreetingController;
    }());
    MyController.GreetingController = GreetingController;
})(MyController || (MyController = {}));
