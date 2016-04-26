angular.module('starter.controllers', ['ngCookies'])

.controller('DashCtrl', function($scope) {})

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

.controller('UserProfileCtrl', function($scope, $cookies) {

  /*

   name: {type:String, required:[true, "UserName is required!"]},
   email: {type:String, required:[true, "Email is required!"], unique:true},
   password: {type: String, require:[true, "Password is required at least one capital letter, and at least 6 characters!"]},
   pendingTasks: {type:[String], default: []},
   interestedTasks: {type:[String], default: []},
   notifications: {type:[String], default: []},
   dateCreated: { type: Date, default: Date.now}

   */

  $scope.user = { name: "Stefan Dao",
    email: "sdao2@illinois.edu",
    password: "Probably shouldn't be in plaintext",
    pendingTasks: ['MyTask1', 'MyTask2'],
    interestedTasks: ["Eat chicken", "Dont eat chicken", "Make a cheesecake"],
    notifications: ["Hey guys", "This is a placeholder"],
    dateCreated: new Date(),
  }

  $cookies.put('userId', "HELLO")

  var userId = $cookies.get('userId');
  console.log(userId);
});
