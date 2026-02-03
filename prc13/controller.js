var app = angular.module("myApp", []);

/* Parent Controller */
app.controller("ParentCtrl", function ($scope) {
    $scope.message1 = "Welcome to KBP College";
    $scope.department = "CO";
});

/* Child Controller */
app.controller("ChildCtrl", function ($scope) {
    $scope.message2 = "Student Details";
    $scope.studentName = "Nilakshi";
    $scope.rollNo = 109;
    $scope.marks = 80;
});
