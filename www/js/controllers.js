angular.module('starter.controllers', [])

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

//.controller('PostCtrl', function($scope) {
  //$scope.settings = {
  //  enableFriends: true
  //};
//})

.controller('PostCtrl', function($scope) {
  $scope.post = {
    name: '',
    category: 'Life',
    description: '',
    assignedUser: '',
    assignedUserName: 'unassigned',
    completed: false
  };

  $scope.submitPost = function () {
    Post.create($scope.post).success(function (data) {
      window.location.replace("#/tab/dash");
    }).error(function (e) {
      alert(e.message)
    });
  }
});
