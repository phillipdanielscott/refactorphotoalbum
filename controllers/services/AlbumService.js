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
