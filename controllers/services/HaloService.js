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
