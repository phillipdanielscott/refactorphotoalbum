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
