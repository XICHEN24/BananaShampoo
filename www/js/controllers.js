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

.controller('CategoryCtrl', ['$scope', '$http', 'Users', '$window' , function($scope, $http, Users, $window) {

  $http.get('http://localhost:4000/api/tasks?where={"category": "Study"}').success(function(data){
    $scope.study = data.data;
    //console.log(data);

  }).error(function(err){
    console.log(err);
  });
  $http.get('http://localhost:4000/api/tasks?where={"category": "Sports"}').success(function(data){
    $scope.sport = data.data;
    //console.log(data);

  }).error(function(err){
    console.log(err);
  });
  $http.get('http://localhost:4000/api/tasks?where={"category": "Food"}').success(function(data){
    $scope.food = data.data;
    console.log(data.data);

  }).error(function(err){
    console.log(err);
  });
  $http.get('http://localhost:4000/api/tasks?where={"category": "Daily"}').success(function(data){
    $scope.daily = data.data;
    //console.log(data);

  }).error(function(err){
    console.log(err);
  });
  $http.get('http://localhost:4000/api/tasks?where={"category": "Travel"}').success(function(data){
    $scope.travel = data.data;
    //console.log(data);

  }).error(function(err){
    console.log(err);
  });
  $http.get('http://localhost:4000/api/tasks?where={"category": "Rent"}').success(function(data){
    $scope.rent = data.data;
    //console.log(data);

  }).error(function(err){
    console.log(err);
  });
  $http.get('http://localhost:4000/api/tasks?where={"category": "Exchange"}').success(function(data){
    $scope.exchange = data.data;
    //console.log(data);

  }).error(function(err){
    console.log(err);
  });

  $scope.studytask = false;
  $scope.studylimit = 5;

  $scope.sporttask = false;
  $scope.sportlimit = 5;

  $scope.foodtask = false;
  $scope.foodlimit = 5;

  $scope.dailytask = false;
  $scope.dailylimit = 5;

  $scope.traveltask = false;
  $scope.travellimit = 5;

  $scope.renttask = false;
  $scope.rentlimit = 5;

  $scope.exchangetask = false;
  $scope.exchangelimit = 5;
  $scope.type = "test"

  $scope.showStudy = function(){
    $scope.studytask = true;
    $scope.sporttask = false;
    $scope.sportlimit = 5;

    $scope.foodtask = false;
    $scope.foodlimit = 5;

    $scope.dailytask = false;
    $scope.dailylimit = 5;

    $scope.traveltask = false;
    $scope.travellimit = 5;

    $scope.renttask = false;
    $scope.rentlimit = 5;

    $scope.exchangetask = false;
    $scope.exchangelimit = 5;
  }
  $scope.showSports = function(){
    $scope.sporttask = true;
    $scope.studytask = false;
    $scope.studylimit = 5;

    $scope.foodtask = false;
    $scope.foodlimit = 5;

    $scope.dailytask = false;
    $scope.dailylimit = 5;

    $scope.traveltask = false;
    $scope.travellimit = 5;

    $scope.renttask = false;
    $scope.rentlimit = 5;

    $scope.exchangetask = false;
    $scope.exchangelimit = 5;
  }
  $scope.showFood = function(){
    $scope.foodtask = true;
    $scope.sportlimit = 5;
    $scope.sporttask = false;

    $scope.studytask = false;
    $scope.studylimit = 5;

    $scope.dailytask = false;
    $scope.dailylimit = 5;

    $scope.traveltask = false;
    $scope.travellimit = 5;

    $scope.renttask = false;
    $scope.rentlimit = 5;

    $scope.exchangetask = false;
    $scope.exchangelimit = 5;
  }
  $scope.showDaily = function(){
    $scope.studytask = false;
    $scope.studylimit = 5;

    $scope.sporttask = false;
    $scope.sportlimit = 5;

    $scope.foodtask = false;
    $scope.foodlimit = 5;

    $scope.dailytask = true;
    //$scope.dailylimit = 5;

    $scope.traveltask = false;
    $scope.travellimit = 5;

    $scope.renttask = false;
    $scope.rentlimit = 5;

    $scope.exchangetask = false;
    $scope.exchangelimit = 5;

  }
  $scope.showTravel = function(){
    $scope.studytask = false;
    $scope.studylimit = 5;

    $scope.sporttask = false;
    $scope.sportlimit = 5;

    $scope.foodtask = false;
    $scope.foodlimit = 5;

    $scope.dailytask = false;
    $scope.dailylimit = 5;

    $scope.traveltask = true;
    //$scope.travellimit = 5;

    $scope.renttask = false;
    $scope.rentlimit = 5;

    $scope.exchangetask = false;
    $scope.exchangelimit = 5;
  }
  $scope.showRent = function(){
    $scope.studytask = false;
    $scope.studylimit = 5;

    $scope.sporttask = false;
    $scope.sportlimit = 5;

    $scope.foodtask = false;
    $scope.foodlimit = 5;

    $scope.dailytask = false;
    $scope.dailylimit = 5;

    $scope.traveltask = false;
    $scope.travellimit = 5;

    $scope.renttask = true;
    //$scope.rentlimit = 5;

    $scope.exchangetask = false;
    $scope.exchangelimit = 5;
  }
  $scope.showExchange = function(){
    $scope.studytask = false;
    $scope.studylimit = 5;

    $scope.sporttask = false;
    $scope.sportlimit = 5;

    $scope.foodtask = false;
    $scope.foodlimit = 5;

    $scope.dailytask = false;
    $scope.dailylimit = 5;

    $scope.traveltask = false;
    $scope.travellimit = 5;

    $scope.renttask = false;
    $scope.rentlimit = 5;

    $scope.exchangetask = true;
    //$scope.exchangelimit = 5;
  }

  $scope.setStudyLimit = function(num){
    $scope.studylimit= $scope.study.length;
  }
  $scope.setSportLimit = function(num){
    $scope.sportlimit= $scope.sport.length;
  }
  $scope.setFoodLimit = function(num){
    $scope.foodlimit= $scope.food.length;
  }
  $scope.setDailyLimit = function(num){
    $scope.dailylimit= $scope.daily.length;
  }
  $scope.setTravelLimit = function(num){
    $scope.travellimit= $scope.travel.length;
  }
  $scope.setRentLimit = function(num){
    $scope.rentlimit= $scope.rent.length;
  }
  $scope.setExchangeLimit = function(num){
    $scope.exchangelimit= $scope.exchange.length;
  }

}])
.controller('CategoryDetailCtrl', ['$scope', '$stateParams', '$http', function($scope, $stateParams, $http) {
  $http.get('http://localhost:4000/api/tasks/'+$stateParams._id).success(function(data){
    $scope.taskdetail = data.data;
    $scope.message = $scope.taskdetail.messages;
    //console.log(data);
    $http.get('http://localhost:4000/api/users/'+$scope.taskdetail.assignedUser).success(function(data){
      $scope.userdetail = data.data;
      console.log(data);
    }).error(function(err){
      console.log(err);
    });

  }).error(function(err){
    console.log(err);
  });



}])
.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
/*
.controller('SettingsController', ['$scope' , '$window' , function($scope, $window) {
    $scope.url = $window.sessionStorage.baseurl;

    $scope.setUrl = function(){
      $window.sessionStorage.baseurl = $scope.url;
      $scope.displayText = "URL set";

    };
}]);
*/
