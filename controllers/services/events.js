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
