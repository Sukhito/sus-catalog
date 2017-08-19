app.controller('CatalogCtrl',function($scope,CatalogService){
    CatalogService.getItems().then(
        function(response){
            $scope.items = response.data;
            $scope.selectedItem = response.data[0];
        }
    )

    $scope.select = function(item){
        $scope.selectedItem = item;
    }

    $scope.section = function(prices){
        return prices.split("|");
    }
});