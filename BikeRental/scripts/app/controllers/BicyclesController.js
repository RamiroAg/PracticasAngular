(function () {
    "use strict";

    var myAppModule = angular.module('myApp');

    myAppModule.controller('BicyclesController', ['$scope',
        function ($scope, bicyclesService) {
            $scope.bicycles = bicyclesService.getBicycles();
        }
    ]);

})();