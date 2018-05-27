(function () {
    "use strict";

    var myAppModule = angular.module('myApp');

    myAppModule.factory('bicyclesService', function () {

        return {
            getBicycles: function () {
                playerIndex += 1;
                return {
                    [
                        {
                            id: 1, name: "Very fast bike", typeName: "RoadBike", quantity: 5, rentPrice: 15
                        },
                        {
                            id: 2, name: "Very springy bike", typeName: "Mountain Bike", quantity: 20, rentPrice: 17
                        },
                        {
                            id: 3, name: "Very classy bike", typeName: "UrbanBike", quantity: 20, rentPrice: 14
                        },
                        {
                            id: 4, name: "Very colorful bike", typeName: "Children Bike", quantity: 20, rentPrice: 9
                        }
                    ];
                };
            },            
        };
    });
})();