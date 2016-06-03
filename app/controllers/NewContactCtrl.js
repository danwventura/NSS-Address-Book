app.controller("NewContactCtrl", function($scope, $location, contactStorage){

  // $scope.title="New Contact";
  // $scope.submitButtonText="Add New Contact";

  $scope.newContact = {
          name:"",
          address:"",
          email:"",
          work:"",
          cell:"",
          birthday:""
    };


  $scope.addNewContact = function(){
    console.log("you clicked it");
    contactStorage.postNewContact($scope.newContact)
      .then(function(response){
        console.log("response from addNewContact", response);
        $location.url("/address-book");
    })
  }
});