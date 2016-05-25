var app = angular.module("addressBookApp", []);


app.controller("NavCtrl", function($scope){
  $scope.navItems = [{name:"Logout"},{name:"Contacts"},{name:"New Contact"}]

});