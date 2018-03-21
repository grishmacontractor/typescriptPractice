var Controllers;
(function (Controllers) {
    var MainController = /** @class */ (function () {
        function MainController($scope, $rootScope) {
            this.message = "Hello from MainController.ts";
            //$scope.vm = this;
            $scope.message = "hi sapna...";
        }
        MainController.$inject = ["$scope", "$rootScope"];
        return MainController;
    }()); //end class MainController
    Controllers.MainController = MainController;
})(Controllers || (Controllers = {}));
