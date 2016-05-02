// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('TodoCtrl', function($scope) {
            $scope.studytask = false;
            $scope.studylimit = 5;
            
            $scope.sporttask = false;
            $scope.sportlimit = 5;
            $scope.type = "test"
            
            $scope.study = [
                            {title: 'Find a tutor'},
                            {title: 'Study room'},
                            {title: 'textbook'},
                            {title: 'share lecture notes'},
                            {title: 'prepare for exams'},
                            {title: 'homework discussion'},
                            {title: 'homework discussion'},
                            {title: 'homework discussion'},
                            {title: 'homework discussion'},
                            {title: 'homework discussion'},
                            {title: 'Find a tutor'},
                            {title: 'Find a tutor'},
                            {title: 'Find a tutor'}
            ]
            $scope.sport = [
                            {title: 'Swim'},
                            {title: 'Play football'},
                            {title: 'Marathon Training'},
                            {title: 'Play volleyball'},
                            {title: 'Play football'},
                            {title: 'Play football'},
                            {title: 'Play football'},
                            {title: 'Play football'}
                            
            ]
            
            
            $scope.showStudy = function(){
                $scope.studytask = true;
                $scope.sporttask = false;
                $scope.sportlimit = 5;
            }
            $scope.showSports = function(){
                $scope.sporttask = true;
                $scope.studytask = false;
                $scope.studylimit = 5;
            }
            $scope.setStudyLimit = function(num){
                $scope.studylimit= $scope.study.lenth;
            }
            $scope.setSportLimit = function(num){
                $scope.sportlimit= $scope.sport.lenth;
            }
    });

