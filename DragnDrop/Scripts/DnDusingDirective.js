/// <reference path="Angular/angular.js" />
var myApp = angular.module("DragnDrop", ["kendo.directives"]);

myApp.controller("myController", function ($scope) {

    $scope.draggableHint = function () {
        return $("#draggable").clone();
    }

  

    $scope.headerInfo = function () {
        var myHeaders = [];
        myHeaders.push("First Name");
        myHeaders.push("Last Name");
        myHeaders.push("Salary");
        return myHeaders;
    }

    $scope.rowInfo = function () {
        var myRowIno = [];
        myRowIno.push("Ajay");
        myRowIno.push("Nag");
        myRowIno.push("23");
    }

    $scope.onDragStart = function () {
        $scope.$apply(function () {
            $scope.draggableClass = "hollow";
            $scope.dropTargetText = "Drop here.";
        });
    }

    $scope.onDrop = function (e) {
        $scope.$apply(function () {
            $scope.IsVisible = $scope.IsVisible ? false : true;
            $scope.draggableClass = "";
        });
    }
})

.directive("myEmployee", function () {
    return {
        restrict: 'E',
        isVisible:'false',
        templateUrl: 'EmpDnD.html',
    };
});