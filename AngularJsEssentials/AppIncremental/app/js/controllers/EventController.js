'use strict';

eventsApp.controller('EventController', 
    function EventController($scope, eventData){
        //Creo un nuevo objeto dentro de Scope para accederlo desde la vista, en aquellos elementos que estén asociados a este controller
        $scope.sortOrder = "name";
        
        eventData.getEvent(function (event){ //Paso como parámetro la función de callback. Es la función que se ejecutará cuando la llamada asincrónica finalice
            $scope.event = event;
        });

        $scope.boolValue = true;

        //Creo funciones dentro de Scope
        $scope.upVoteSession = function(session){
            session.upVoteCount++;
        };

        $scope.downVoteSession = function(session){
            session.upVoteCount--;
        };
    }
);