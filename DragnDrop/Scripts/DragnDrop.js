/// <reference path="angular.js" />
var myApp = angular.module("DragnDrop", ["kendo.directives"]);
myApp.controller("myController", function ($scope) {

    $scope.draggableHint = function () {
        return $("#draggable").clone();
    }
    $scope.onDragStart = function () {
        $scope.$apply(function () {
            $scope.draggableClass = "hollow";
            $scope.dropTargetText = "Drop here.";
        });
    }

    $scope.onDrop = function (e) {
        $scope.$apply(function () {
            $scope.draggableClass = "";
        });
    }
});


