'use strict';

app.factory("contactStorage", function($q, $http, firebaseURL){
  

  var getContactList = function(){
    let contacts = [];
    return $q(function(resolve, reject){
      $http.get(`${firebaseURL}contacts.json`)
        .success(function(contactObject){
          var conCollection = contactObject;
          Object.keys(conCollection).forEach(function(key){
            conCollection[key].id=key;
            contacts.push(conCollection[key]);
          });
          resolve(contacts);
        })
        .error(function(error){
          reject(error);
        });
    });
  };

  var deleteContact = function(contactId){
    console.log("itemId for delete", contactId);
    return $q(function(resolve, reject){
      $http
        .delete(firebaseURL + `/contacts/${contactId}.json`)
        .success(function(objectFromFirebase){
          resolve(objectFromFirebase);
        });
    });
  };

  var postNewContact = function(newContact){
    return $q(function(resolve,reject){
      $http.post(
        firebaseURL + "contacts.json",
        JSON.stringify({
        name:newContact.name,
        address:newContact.address,
        email:newContact.email,
        work:newContact.work,
        cell:newContact.cell,
        birthday:newContact.birthday
        })

        )
      .success(
        function(objectFromFirebase){
          resolve(objectFromFirebase);
        }
      );
    });
  };

  var getSingleItem = function(contactId){
    return $q(function(resolve,reject){
      $http.get(firebaseURL + "contact/" + contactId + '.json')
    })
  }


  return {getContactList:getContactList, deleteContact:deleteContact, postNewContact:postNewContact};
});
