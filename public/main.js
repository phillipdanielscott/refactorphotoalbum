(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports=function(app){
  app.controller("BadcosplayController",["$scope", "BadService",function($scope,BadService){
  console.log('hey we made it')
  $scope.cosplay = BadService.getBad();
  console.log("is this thing even working?");

  BadService.getBad().then(function(cos){
         console.log(cos.data);
         $scope.cosplay = cos.data;
       });

  }])
}

},{}],2:[function(require,module,exports){
module.exports=function(app){
  app.controller("CatsController",["$scope", "CatsService",function($scope,CatsService){
  console.log('hey we made it')
  $scope.cats = CatsService.getcats();
  console.log("is this thing even working?");

  CatsService.getcats().then(function(cat){
         console.log(cat.data);
         $scope.cats = cat.data;
       });

  }])
}

},{}],3:[function(require,module,exports){
module.exports=function(app){
  app.controller("CosplayController",["$scope", "AlbumService",function($scope,AlbumService){
  console.log('hey we made it')
  $scope.albums = AlbumService.getEvents();
  console.log("is this thing even working?");

  AlbumService.getEvents().then(function(album){
         console.log(album.data);
         $scope.albums = album.data;
       });

  }])
}

},{}],4:[function(require,module,exports){
module.exports=function(app){
  app.controller("GameController",["$scope", "GameService",function($scope,GameService){
  console.log('hey we made it')
  $scope.games = GameService.getgame();
  console.log("is this thing even working?");

  GameService.getgame().then(function(game){
         console.log(game.data);
         $scope.games = game.data;
       });

  }])
}

},{}],5:[function(require,module,exports){
module.exports=function(app){
  app.controller("HaloController",["$scope", "HaloService",function($scope,HaloService){
  console.log('this is the halo controller')
  $scope.halos = HaloService.getHalo();
  console.log("is this thing even working?");

  HaloService.getHalo().then(function(halo){
         console.log(halo.data);
         $scope.halos = halo.data;
       });

  }])
}

},{}],6:[function(require,module,exports){
module.exports=function(app){
app.factory("AlbumService", ["$http",function($http){
let addedEvents = [];
let attended = [];


return {

  getEvents: function() {
            var promise = $http({
                method: 'GET',
                url: 'http://localhost:3000/API/cosplay.JSON',
            }).success(function(response) {
                console.log(response);
                console.log("we got some cosplay sonnnnn");
                // angular.copy(response.data.books,arts);
            }).error(function(response) {
                return {
                    "status": false
                };
            });
            return promise;
                },
  // attendingEvents: function (target){
  //   console.log("consider it done")
  //   $http({
  //     method:"POST",
  //     url:"http://localhost:3000/API/events.JSON" + target.id
  //   }).then(function success(response){
  //     console.log(response.data);
  //     angular.copy(response.data,attended);
  //   });
  //   return attended;
  // },
}







}]);
};

},{}],7:[function(require,module,exports){
module.exports=function(app){
app.factory("BadService", ["$http",function($http){
let addedEvents = [];
let attended = [];


return {

  getBad: function() {
            var promise = $http({
                method: 'GET',
                url: 'http://localhost:3000/API/badcosplay.JSON',
            }).success(function(response) {
                console.log(response);
                console.log("we got some gamessonnnnn");
                // angular.copy(response.data.books,arts);
            }).error(function(response) {
                return {
                    "status": false
                };
            });
            return promise;
                },
  // attendingEvents: function (target){
  //   console.log("consider it done")
  //   $http({
  //     method:"POST",
  //     url:"http://localhost:3000/API/events.JSON" + target.id
  //   }).then(function success(response){
  //     console.log(response.data);
  //     angular.copy(response.data,attended);
  //   });
  //   return attended;
  // },
}







}]);
};

},{}],8:[function(require,module,exports){
module.exports=function(app){
app.factory("CatsService", ["$http",function($http){
let addedEvents = [];
let attended = [];


return {

  getcats: function() {
            var promise = $http({
                method: 'GET',
                url: 'http://localhost:3000/API/cat.JSON',
            }).success(function(response) {
                console.log(response);
                console.log("we got some gamessonnnnn");
                // angular.copy(response.data.books,arts);
            }).error(function(response) {
                return {
                    "status": false
                };
            });
            return promise;
                },
  // attendingEvents: function (target){
  //   console.log("consider it done")
  //   $http({
  //     method:"POST",
  //     url:"http://localhost:3000/API/events.JSON" + target.id
  //   }).then(function success(response){
  //     console.log(response.data);
  //     angular.copy(response.data,attended);
  //   });
  //   return attended;
  // },
}







}]);
};

},{}],9:[function(require,module,exports){
module.exports=function(app){
app.factory("GameService", ["$http",function($http){
let addedEvents = [];
let attended = [];


return {

  getgame: function() {
            var promise = $http({
                method: 'GET',
                url: 'http://localhost:3000/API/games.JSON',
            }).success(function(response) {
                console.log(response);
                console.log("we got some gamessonnnnn");
                // angular.copy(response.data.books,arts);
            }).error(function(response) {
                return {
                    "status": false
                };
            });
            return promise;
                },
  // attendingEvents: function (target){
  //   console.log("consider it done")
  //   $http({
  //     method:"POST",
  //     url:"http://localhost:3000/API/events.JSON" + target.id
  //   }).then(function success(response){
  //     console.log(response.data);
  //     angular.copy(response.data,attended);
  //   });
  //   return attended;
  // },
}







}]);
};

},{}],10:[function(require,module,exports){
module.exports=function(app){
app.factory("HaloService", ["$http",function($http){
let addedEvents = [];
let attended = [];


return {

  getHalo: function() {
            var promise = $http({
                method: 'GET',
                url: 'http://localhost:3000/API/halo.JSON',
            }).success(function(response) {
                console.log(response);
                console.log("we got some halo dude sonnnnn");
                // angular.copy(response.data.books,arts);
            }).error(function(response) {
                return {
                    "status": false
                };
            });
            return promise;
                },
  // attendingEvents: function (target){
  //   console.log("consider it done")
  //   $http({
  //     method:"POST",
  //     url:"http://localhost:3000/API/events.JSON" + target.id
  //   }).then(function success(response){
  //     console.log(response.data);
  //     angular.copy(response.data,attended);
  //   });
  //   return attended;
  // },
}







}]);
};

},{}],11:[function(require,module,exports){
module.exports=function(app){
app.factory("SuperService", ["$http",function($http){
let addedEvents = [];
let attended = [];


return {

  getHero: function() {
            var promise = $http({
                method: 'GET',
                url: 'http://localhost:3000/API/hero.JSON',
            }).success(function(response) {
                console.log(response);
                console.log("we got some hero sonnnnn");
                // angular.copy(response.data.books,arts);
            }).error(function(response) {
                return {
                    "status": false
                };
            });
            return promise;
                },
  // attendingEvents: function (target){
  //   console.log("consider it done")
  //   $http({
  //     method:"POST",
  //     url:"http://localhost:3000/API/events.JSON" + target.id
  //   }).then(function success(response){
  //     console.log(response.data);
  //     angular.copy(response.data,attended);
  //   });
  //   return attended;
  // },
}







}]);
};

},{}],12:[function(require,module,exports){
module.exports=function(app){
  app.controller("superheroesController",["$scope", "SuperService",function($scope,SuperService){
  console.log('hey we made it')
  $scope.heroes = SuperService.getHero();
  console.log("is this thing even working?");

  SuperService.getHero().then(function(hero){
         console.log(hero.data);
         $scope.heroes = hero.data;
       });

  }])
}

},{}],13:[function(require,module,exports){
let app = angular.module ("CosplayApp", ["ngRoute"])
app.config(["$routeProvider", function($routeProvider){
  $routeProvider.when("/", {
    templateUrl: "templates/cosplay.html",
    controller: "CosplayController"
  })
  $routeProvider.when("/halo", {
    templateUrl:"templates/halo.html",
    controller: "HaloController"
  })
  $routeProvider.when("/games", {
    templateUrl:"templates/games.html",
    controller: "GameController"
  })
  $routeProvider.when("/superheroes", {
    templateUrl:"templates/superheroes.html",
    controller: "superheroesController"
  })
  $routeProvider.when("/badcosplay", {
    templateUrl:"templates/badcosplay.html",
    controller: "BadcosplayController"
  })
  $routeProvider.when("/cats", {
    templateUrl:"templates/cats.html",
    controller: "CatsController"
  })
  // $routeProvider.when("/", {
    // redirectTo: "/"
  // })
}])
require("./controllers/BadcosplayController.js")(app);
require("./controllers/CatsController.js")(app);
require("./controllers/superheroesController.js")(app);
require("./controllers/GameController.js")(app);
require("./controllers/CosplayController.js")(app);
require("./controllers/HaloController.js")(app);
require("./controllers/services/HaloService.js")(app);
require("./controllers/services/AlbumService.js")(app);
require("./controllers/services/GameService.js")(app);
require("./controllers/services/SuperService.js")(app);
require("./controllers/services/BadService.js")(app);
require("./controllers/services/CatsService.js")(app);

},{"./controllers/BadcosplayController.js":1,"./controllers/CatsController.js":2,"./controllers/CosplayController.js":3,"./controllers/GameController.js":4,"./controllers/HaloController.js":5,"./controllers/services/AlbumService.js":6,"./controllers/services/BadService.js":7,"./controllers/services/CatsService.js":8,"./controllers/services/GameService.js":9,"./controllers/services/HaloService.js":10,"./controllers/services/SuperService.js":11,"./controllers/superheroesController.js":12}]},{},[13])