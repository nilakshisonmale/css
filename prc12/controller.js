var app = angular.module("myApp", []);

/* 1. Basic Controller */
app.controller("BasicCtrl", function ($scope) {
    $scope.message = "Hello from Basic Controller";
    $scope.greet = function () {
        alert("Welcome!");
    };
});

/* 2. Parent Controller */
app.controller("ParentCtrl", function ($scope) {
    $scope.parentData = "This data is from Parent Controller";
});

/* 2. Child Controller */
app.controller("ChildCtrl", function ($scope) {
    $scope.childData = "This data is from Child Controller";
});

/* 4. Filter Controller */
app.controller("FilterCtrl", function ($scope) {
    $scope.name = "client side scripting";
    $scope.fees = 2500;
});
