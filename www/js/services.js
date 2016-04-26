var starterServices = angular.module('starter.services', []);

starterServices.factory('Chats', function() {
  // Might use a resource here that returns a JSON array
  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});

starterServices.factory('CommonData', function() {
  var data = "";
  return {
    getData: function() {
      return data;
    },
    setData: function(newData) {
      data = newData;
    }
  }
});

starterServices.factory('Users', function($http, $window) {
  return {
    get: function() {
      var baseUrl = $window.sessionStorage.baseurl;
      console.log(baseUrl + '/api/users');
      return $http.get(baseUrl + '/api/users');
    },
    post: function(user) {
      var baseUrl = $window.sessionStorage.baseurl;
      console.log(baseUrl + '/api/users');
      return $http.post(baseUrl + '/api/users', user);
    },
    delete: function(userID) {
      var baseUrl = $window.sessionStorage.baseurl;
      console.log(baseUrl + '/api/users/');
      //alert($http.delete(baseUrl+'/api/users/'+id));
      //console.log(id);
      //id ="56fe48f9711a539f06af0db0";
      return $http.delete(baseUrl + '/api/users/' + userID);
    },
    put: function(userID, user) {
      var baseUrl = $window.sessionStorage.baseurl;
      console.log(baseUrl + '/api/users/'+userID);
      //alert($http.delete(baseUrl+'/api/users/'+id));
      //console.log(id);
      //id ="56fe48f9711a539f06af0db0";
      return $http.put(baseUrl + '/api/users/' + userID, user);
    },
    getByUserId: function(userID) {
      var baseUrl = $window.sessionStorage.baseurl;
      console.log(baseUrl + '/api/users/');
      return $http.get(baseUrl + '/api/users/'+userID);
    }
  }
});

starterServices.factory('Tasks', function($http, $window) {
  return {
    get: function() {
      var baseUrl = $window.sessionStorage.baseurl;
      console.log(baseUrl + '/api/tasks');
      return $http.get(baseUrl + '/api/tasks');
    },
    post: function(task) {
      var baseUrl = $window.sessionStorage.baseurl;
      console.log(baseUrl + '/api/tasks');
      return $http.post(baseUrl + '/api/tasks', task);
    },
    delete: function(taskID) {
      var baseUrl = $window.sessionStorage.baseurl;
      console.log(baseUrl + '/api/tasks/');
      //alert($http.delete(baseUrl+'/api/users/'+id));
      //console.log(id);
      //id ="56fe48f9711a539f06af0db0";
      return $http.delete(baseUrl + '/api/tasks/' + taskID);
    },
    put: function(taskID, task) {
      var baseUrl = $window.sessionStorage.baseurl;
      console.log(baseUrl + '/api/tasks/'+taskID);
      //alert($http.delete(baseUrl+'/api/users/'+id));
      //console.log(id);
      //id ="56fe48f9711a539f06af0db0";
      return $http.put(baseUrl + '/api/tasks/' + taskID, task);
    },
    getByTaskId: function(taskID) {
      var baseUrl = $window.sessionStorage.baseurl;
      console.log(baseUrl + '/api/tasks/');
      return $http.get(baseUrl + '/api/tasks/'+taskID);
    }
  }
});
