module.exports=function(app){
  app.controller("superheroesController",["$scope", "SuperService",function($scope,SuperService){
  console.log('hey we made it')
  $scope.heroes = SuperService.getHero();
  console.log("is this thing even working?");

  SuperService.getHero().then(function(hero){
         console.log(hero.data);
         $scope.heroes = hero.data;
       });

  }])
}
