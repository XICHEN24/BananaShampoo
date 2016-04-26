angular.module('starter.controllers', ['ngCookies'])

  .controller('userSignIn', ['$scope', '$http', 'Users', '$window','$sce', '$cookies', function($scope, $http, Users, $window, $sce, $cookies){

    $scope.formEmail = {text:""}
    $scope.formPassword = {text:""}

    $scope.userSignIn = function() {

     Users.get().success(function(data) {
        $scope.temp = data;
        $scope.user = $scope.temp.data;
        console.log($scope.user);
        var email = $scope.formEmail.text;
        var password = $scope.formPassword.text;
        var errorMessage = "";
        var passwordTrue = false;
        var emailTrue = false;

         for (var i =0; i <$scope.user.length;i++) {
           if (email == $scope.user[i].email) {
             emailTrue = true;
             //console.log("I am here!!");
             if (password == $scope.user[i].password) {
               $scope.currentUser = $scope.user[i];
               //console.log($scope.currentUser.email);
               //console.log($scope.currentUser.password);
               passwordTrue = true;
               $cookies.put('userId', $scope.currentUser._id);
               console.log($scope.currentUser._id);
               //var temp = $cookies.get('userId');
               //console.log(temp);
               //if(password)
               //   $scope.UserSignedIn = $sce.trustAsHtml('Nice to see you again, ' + $scope.currentUser.name);
               break;
             }
           }
         }
         if (emailTrue && passwordTrue) {
           $window.location.href = '/index.html#/tab/chats';
         }


         if(!emailTrue)
           errorMessage = "The email you enter is not exists, please try again!";
         else
         if(!passwordTrue && emailTrue)
           errorMessage = "The password you enter is not exists, please try again!";

         //console.log(errorMessage);
         $scope.errorPopUp = $sce.trustAsHtml(errorMessage);
     })
     .error(function(data) {
     console.log('Error: ' + data);
     });
    }

  }])
.controller('userSignUp', ['$scope', '$http', 'Users', '$window','$sce', function($scope, $http, Users, $window, $sce){

  $scope.formName = {text: ""}
  $scope.formEmail = {text:""}
  $scope.formPassword = {text:""}
  /*
  Users.get().success(function(data) {
      $scope.Users = data;
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });
    */

  $scope.createUser = function() {
    //alert("I cliked here");
    //console.log($scope.formName)
    console.log($scope.formName.text)
    console.log($scope.formEmail.text)
    console.log($scope.formPassword.text)
    var user = { name: $scope.formName.text, email: $scope.formEmail.text, password: $scope.formPassword.text};
    Users.post(user);
  };

  $scope.submitForm = function(isValid) {
    // check to make sure the form is completely valid
    if (isValid) {
      //alert('User '+ $scope.formName.text +' has been add');
      $scope.UserAdded = $sce.trustAsHtml('User "' + $scope.formName.text + '" has been add');
    }
  };

}])

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('SettingsController', ['$scope', '$window', function($scope, $window) {
  $scope.url = $window.sessionStorage.baseurl;

  $scope.setUrl = function() {
    $window.sessionStorage.baseurl = $scope.url;
    $scope.displayText = "URL set";
  };
}]);
