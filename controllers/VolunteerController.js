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
