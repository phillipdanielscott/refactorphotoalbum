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
