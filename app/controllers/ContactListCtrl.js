app.controller("ContactListCtrl", function($scope, $http, $location, contactStorage){
  $scope.contacts = [];

  contactStorage.getContactList().then(function(conCollection){

    $scope.contacts = conCollection;
  });

  $scope.contactDelete = function(contactId){
    contactStorage.deleteContact(contactId).then(function(response){
      $scope.contacts = [];
        contactStorage.getContactList().then(function(conCollection){
          $scope.contacts = conCollection;
        });
    });
  };



});