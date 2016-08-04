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
