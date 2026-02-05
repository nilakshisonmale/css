var app = angular.module("myApp", []);

app.controller("StudentCtrl", function ($scope) {

    $scope.students = [
        { name: "Rahul", rollno: 103, marks: 78 },
        { name: "Vedant", rollno: 101, marks: 85 },
        { name: "Amit", rollno: 102, marks: 90 }
    ];

});