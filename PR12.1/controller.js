var app = angular.module("myApp", []);

/* Student Controller */
app.controller("StudentCtrl", function ($scope) {

    // Student object (Model)
    $scope.student = {
        name: "Nilakshi",
        rollNo: 109,
        marks: 80
    };

    // Controller function to display message
    $scope.showMessage = function () {
        alert("Student details loaded successfully!");
    };
});
