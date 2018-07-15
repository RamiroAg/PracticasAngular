'use strict';

eventsApp.controller('EventController', 
    function EventController($scope){
        //Creo un nuevo objeto dentro de Scope para accederlo desde la vista, en aquellos elementos que estén asociados a este controller
        $scope.event = {
            name: "Primer evento de Guti",
            date: "5/5/2018",
            time: "10:30 pm",
            location: {
                address: "Lo de guti",
                city: "Gerli",
                province: "Buenos Aires"
            },
            imageUrl: "/img/angularjs-logo.png",
            sessions: [
                {
                    name: "Session 1",
                    creatorName: "Guti",
                    duration: "2 hs",
                    level: "Advanced",
                    abstract: "Vas a aprender una bocha amiguito",
                    upVoteCount: 0
                },
                {
                    name: "Session 2",
                    creatorName: "Iridia",
                    duration: "4 hs",
                    level: "Beginner",
                    abstract: "Vas a aprender lo básico",
                    upVoteCount: 0
                },
                {
                    name: "Session 3",
                    creatorName: "Chelito",
                    duration: "1:30 hs",
                    level: "Intermediate",
                    abstract: "Vas a aprender a ser un guerrero angular",
                    upVoteCount: 0
                },
                {
                    name: "Session 4",
                    creatorName: "El careta querido",
                    duration: "2 hs",
                    level: "N/A",
                    abstract: "Vas a aprender a vestirte lindo para ir a la oficina",
                    upVoteCount: 0
                }
            ]
        };

        $scope.boolValue = false;

        //Creo funciones dentro de Scope
        $scope.upVoteSession = function(session){
            session.upVoteCount++;
        };

        $scope.downVoteSession = function(session){
            session.upVoteCount--;
        };
    }
);