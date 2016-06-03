var app = angular.module("addressBookApp", ['ngRoute'])
  .constant("firebaseURL", "https://nss-contact-book.firebaseio.com/");



app.controller("NewCtrl", function($scope){

    $scope.contactInfo = {
        name:"",
        address:"",
        email:"",
        work:"",
        cell:"",
        birthday:""
  };
});




app.config(function($routeProvider){
  $routeProvider.
  when('/',{
    templateUrl: 'partials/login.html',
    controller: 'ContactListCtrl'
  }).
  when('/contacts/new', {
    templateUrl: 'partials/new-contact.html',
    controller: 'NewContactCtrl'
  }).
  when('/address-book', {
    templateUrl: 'partials/address-book.html',
    controller: 'ContactListCtrl'
  }).
  when('/contacts/:contactId', {
    templateUrl: 'partials/contact-details.html',
    controller: 'ContactListCtrl'
  }).
  when('/login', {
    templateUrl: 'partials/login.html',
    controller: 'ContactListCtrl'
  }).
  when('/logout', {
    templateUrl: 'partials/login.html',
    controller: 'ContactListCtrl'
  }).
  otherwise('/');
  })


  


