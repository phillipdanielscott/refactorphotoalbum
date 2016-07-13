(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports=function(app){
  app.controller("EventController",["$scope", "EventService",function($scope,EventService){
  console.log('hey we made it')
  $scope.events = EventService.getEvents();
  $scope.attended = function(target){
     console.log(target)
     EventService.attendingEvents(target)
   }


  }])
}

},{}],2:[function(require,module,exports){
module.exports=function(app){
  app.controller("VolunteerController",["$scope", "EventService",function($scope,EventService){
  console.log('hey we made it');
  $scope.events = EventService.getEvents();
  $scope.attended = function(target){
     console.log(target)
     EventService.attendingEvents(target)
   }
}])
}

},{}],3:[function(require,module,exports){
module.exports=function(app){
app.factory("EventService", ["$http",function($http){
let addedEvents = [];
let attended = [];


return {

  getEvents: function(){
    console.log("getting some events")
    $http({
         method: "GET",
         url:"http://localhost:3000/API/events.JSON",
    }).then(function success(response){
      console.log(response.data);
      angular.copy(response.data,addedEvents);
    });
    return addedEvents;
  },
  attendingEvents: function (target){
    console.log("consider it done")
    $http({
      method:"POST",
      url:"http://localhost:3000/API/events.JSON" + target.id
    }).then(function success(response){
      console.log(response.data);
      angular.copy(response.data,attended);
    });
    return attended;
  }
}







}]);
};

},{}],4:[function(require,module,exports){
let app = angular.module ("EventApp", ["ngRoute"])
app.config(["$routeProvider", function($routeProvider){
  $routeProvider.when("/", {
    templateUrl: "templates/events.html",
    controller: "EventController"
  })
  $routeProvider.when("/volunteer", {
    templateUrl:"templates/volunteer.html",
    controller: "VolunteerController"
  })
  // $routeProvider.when("/", {
    // redirectTo: "/"
  // })
}])

require("./controllers/EventController")(app);
require("./controllers/services/events")(app);
require("./controllers/VolunteerController")(app)

},{"./controllers/EventController":1,"./controllers/VolunteerController":2,"./controllers/services/events":3}]},{},[4])