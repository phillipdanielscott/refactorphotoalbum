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
