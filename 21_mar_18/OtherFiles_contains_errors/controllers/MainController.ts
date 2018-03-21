module Controllers{
    export class MainController{

        static $inject = ["$scope","$rootScope"];
        message = "Hello from MainController.ts";
        constructor($scope,$rootScope)
        {
            //$scope.vm = this;
            $scope.message="hi sapna...";
        }
    }//end class MainController
}