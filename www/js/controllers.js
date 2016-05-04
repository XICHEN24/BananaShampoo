angular.module('starter.controllers', ['ngCookies'])

  .controller('userSignIn', ['$scope', '$http', 'Users', '$window','$sce', '$cookies', function($scope, $http, Users, $window, $sce, $cookies){


    $scope.formEmail = {text:""}
    $scope.formPassword = {text:""}

    $scope.userSignIn = function() {

     Users.get().success(function(data) {
        $scope.temp = data;
        $scope.user = $scope.temp.data;
        //console.log($scope.user);
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
               //console.log($scope.currentUser._id);
               //var temp = $cookies.get('userId');
               //console.log(temp);
               //if(password)
               //   $scope.UserSignedIn = $sce.trustAsHtml('Nice to see you again, ' + $scope.currentUser.name);
               break;
             }
           }
         }
         if (emailTrue && passwordTrue) {
           $window.location.href = 'index.html#/tab/userprofile';
         }
         if(!emailTrue)
           errorMessage = "The email you enter is not exists, please try again!";
         else
         if(!passwordTrue && emailTrue)
           errorMessage = "The password you enter is not true, please try again!";

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
  $scope.failMessage = "";
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
    Users.post(user).success(function(data, status){
      $scope.submitForm = function(isValid) {
        // check to make sure the form is completely valid
        if (isValid) {
          //alert('User '+ $scope.formName.text +' has been add');
          $scope.UserAdded = $sce.trustAsHtml('User "' + $scope.formName.text + '" has been add');
        }
      };
      $window.location.href = 'index.html#/tab/signIn';

    }).error(function(err){
        $scope.failMessage = "The Email you entered has been registered";
    });
  };

}])

.controller('ChatsCtrl', function($scope, Chats, $cookies) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  var temp = $cookies.get('userId');
  console.log(temp);
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('CategoryCtrl', ['$scope', '$http', 'Users', '$window','$cookies', function($scope, $http, Users, $window,$cookies) {

  var temp = $cookies.get('userId');
  $cookies.put('userId',temp);
  console.log(temp);

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

  $scope.category = 'Category';

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
    $scope.category = 'Study';
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
    $scope.category = 'Sports';
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
    $scope.category = 'Food';
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
  }/*
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

  } */
  $scope.showTravel = function(){
    $scope.category = 'Travel';
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
    $scope.category = 'Rent';
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
    $scope.category = 'Exchange';
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
  }/*
  $scope.setDailyLimit = function(num){
    $scope.dailylimit= $scope.daily.length;
  }*/
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

.controller('PostCtrl',['$scope', '$cookies', 'Tasks', 'Users', function($scope, $cookies, Tasks, Users) {

  $scope.name = {text:""};
  $scope.category = {text:"study"};
  $scope.description = {text:""};
  $scope.assignedUser = $cookies.get('userId');
  $scope.completed = false;

  $scope.submitPost = function () {

    Users.getByUserId($scope.assignedUser).success(function (userdata) {

      var user = userdata.data;

      var post = {
        name: $scope.name.text,
        category: $scope.category.text,
        description: $scope.description.text,
        assignedUser: $scope.assignedUser,
        assignedUserName: user.name,
        completed: false
      };
      console.log(post);
      Tasks.post(post).success(function (data) {
        window.location.href = 'index.html#/tab/category';
        var task = data.data;
        user.pendingTasks.push(task._id);
        Users.put(user._id, user).success(function(data){
          console.log("Updated user");
          console.log(user);
        }).error(function(e) {
          alert(e);
        });

      }).error(function (e) {
        alert(e)
      });
    }).error(function (e) {
      alert(e)
    });
  }
}])

.controller('UserProfileCtrl', ['$scope', '$http', '$cookies', 'Users', 'Tasks', function($scope, $http, $cookies, Users, Tasks) {

  var userId = $cookies.get('userId');
  console.log('hello');

  document.getElementById('uploadFile').addEventListener('change', uploadFile, false);

  Users.getByUserId(userId).success(function(data){
    var user = data.data;
    console.log("success")
    console.log(user);
    $scope.user = user;

    if(user.profilePicture === undefined || user.profilePicture === "")
    {
      document.getElementById('userImage').style.backgroundImage = "url('../img/defaultprofile.png')";
    }
    else
    {
      document.getElementById('userImage').style.backgroundImage = "url('"+user.profilePicture+"')";
    }

    $scope.pendingTasks = [];
    for (var i = 0; i < user.pendingTasks.length; i++)
    {
      Tasks.getByTaskId(user.pendingTasks[i]).success(function(data){
        $scope.pendingTasks.push(data.data);
      });
    }

    $scope.interestedTasks = [];
    for (var i = 0; i < user.interestedTasks.length; i++)
    {
      Tasks.getByTaskId(user.interestedTasks[i]).success(function(data){
        $scope.interestedTasks.push(data.data);
      });
    }

  });

  function uploadFile(input)
  {
    if (input.target.files && input.target.files[0] && input.target.files[0].type.match('image.*')) {
      console.log(input.target.files[0]);

      var file = input.target.files[0];

      var reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = (function(theFile) {
        return function(e) {
          // Render thumbnail.
          $scope.user.profilePicture =  e.target.result;
          document.getElementById('userImage').style.backgroundImage = "url('"+e.target.result+"')";

          Users.put(userId, $scope.user).success(function(data){
            console.log("updated picture");
            console.log($scope.user);
          });
        };
      })(file);
    }
    else
    {
      console.log('uploading invalid file');
    }
  }

  $scope.remove = function(task) {
    var index = $scope.pendingTasks.indexOf(task);
    $scope.pendingTasks.splice(index, 1);

    index = $scope.user.pendingTasks.indexOf(task._id);
    $scope.user.pendingTasks.splice(index, 1);

    Users.put($scope.user._id, $scope.user).success(function(data){
      console.log("Removed task from pendingTasks of user " + $scope.user._id);
    });

    var interestedUsers = task.interestedUsers;

    for ( var i = 0; i < interestedUsers.length; i++)
    {
      Users.getByUserId(interestedUsers[i]).success(function(data){
        var user = data.data;
        var ind = user.interestedTasks.indexOf(task._id);

        if (ind !== -1)
        {
          user.interestedTasks.splice(ind, 1);
        }
        Users.put(user._id, user).success(function(data){
          console.log("Removed task from interestedTasks of user " + user._id);
        });
      });
    }

    Tasks.delete(task._id).success(function(data){
      console.log("Deleted task from MongoDB");
    });
  }

  $scope.removeInterest = function(task) {
    var index = $scope.interestedTasks.indexOf(task);
    $scope.interestedTasks.splice(index, 1);

    index = $scope.user.interestedTasks.indexOf(task._id);
    $scope.user.interestedTasks.splice(index, 1);

    Users.put($scope.user._id, $scope.user).success(function(data){
      console.log("Removed task from interestedTasks of user " + $scope.user._id);
    });
  }

  $scope.removeNotification = function(notification) {
    var index = $scope.user.notifications.indexOf(notification);
    $scope.user.notifications.splice(index, 1);

    Users.put($scope.user._id, $scope.user).success(function(data){
      console.log("Removed notification from notifications of user " + $scope.user._id);
    });
  }

}])

.controller('SettingsController', ['$scope', '$window', function($scope, $window) {
  $scope.url = $window.sessionStorage.baseurl;

  $scope.setUrl = function() {
    $window.sessionStorage.baseurl = $scope.url;
    $scope.displayText = "URL set";
  };
}]);
