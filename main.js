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
