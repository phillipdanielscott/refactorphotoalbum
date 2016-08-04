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
