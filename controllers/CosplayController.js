module.exports=function(app){
  app.controller("CosplayController",["$scope", "AlbumService",function($scope,AlbumService){
  console.log('hey we made it')
  $scope.albums = AlbumService.getEvents();
  console.log("is this thing even working?");

  AlbumService.getEvents().then(function(album){
         console.log(album.data);
         $scope.albums = album.data;
       });

  }])
}
