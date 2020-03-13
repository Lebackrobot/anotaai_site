app.controller('mainController', function ($scope, mainServ) {
    $scope.filmes = {};

    mainServ.getDocuments(function(response){
        console.log(response);
        $scope.filmes = response;
    });

});